package com.ai7miao.homework

import android.Manifest
import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.view.KeyEvent
import android.webkit.*
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import java.io.File

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private val BASE_URL = "https://ai7miao.com"
    private var filePathCallback: ValueCallback<Array<Uri>>? = null
    private var tempPhotoUri: Uri? = null
    private var croppedPhotoUri: Uri? = null

    // 1. 拍照回调
    private val takePictureLauncher = registerForActivityResult(
        ActivityResultContracts.TakePicture()
    ) { success ->
        if (success && tempPhotoUri != null) {
            startCrop(tempPhotoUri!!)
        } else {
            cancelUpload()
        }
    }

    // 2. 相册选择回调
    private val selectPictureLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
            val uri = result.data?.data
            if (uri != null) {
                startCrop(uri)
            } else {
                cancelUpload()
            }
        } else {
            cancelUpload()
        }
    }

    // 3. 裁剪回调
    private val cropLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
            val uri = croppedPhotoUri ?: result.data?.data
            if (uri != null) {
                filePathCallback?.onReceiveValue(arrayOf(uri))
            } else {
                cancelUpload()
            }
        } else {
            cancelUpload()
        }
        filePathCallback = null
    }

    private val requestPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        if (isGranted) {
            startCamera()
        } else {
            Toast.makeText(this, "需要相机权限", Toast.LENGTH_SHORT).show()
            cancelUpload()
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        webView = findViewById(R.id.webview)
        setupWebView()
        webView.loadUrl(BASE_URL)
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun setupWebView() {
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            allowContentAccess = true
        }
        
        webView.webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(
                webView: WebView?,
                filePathCallback: ValueCallback<Array<Uri>>?,
                fileChooserParams: FileChooserParams?
            ): Boolean {
                this@MainActivity.filePathCallback?.onReceiveValue(null)
                this@MainActivity.filePathCallback = filePathCallback
                
                showImagePickerDialog()
                return true
            }
        }
    }

    private fun showImagePickerDialog() {
        val options = arrayOf("拍照", "从相册选择")
        AlertDialog.Builder(this)
            .setTitle("选择图片来源")
            .setItems(options) { _, which ->
                when (which) {
                    0 -> checkCameraPermission()
                    1 -> openGallery()
                }
            }
            .setNegativeButton("取消") { _, _ -> cancelUpload() }
            .setOnCancelListener { cancelUpload() }
            .show()
    }

    private fun checkCameraPermission() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) 
            == PackageManager.PERMISSION_GRANTED) {
            startCamera()
        } else {
            requestPermissionLauncher.launch(Manifest.permission.CAMERA)
        }
    }

    private fun startCamera() {
        try {
            val photoFile = File(cacheDir, "temp_camera.jpg")
            if (photoFile.exists()) photoFile.delete()
            tempPhotoUri = FileProvider.getUriForFile(this, "com.ai7miao.homework.fileprovider", photoFile)
            takePictureLauncher.launch(tempPhotoUri)
        } catch (e: Exception) {
            cancelUpload()
        }
    }

    private fun openGallery() {
        val intent = Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI)
        selectPictureLauncher.launch(intent)
    }

    private fun startCrop(sourceUri: Uri) {
        try {
            val croppedFile = File(cacheDir, "cropped_image.jpg")
            if (croppedFile.exists()) croppedFile.delete()
            croppedPhotoUri = FileProvider.getUriForFile(this, "com.ai7miao.homework.fileprovider", croppedFile)

            val intent = Intent("com.android.camera.action.CROP").apply {
                setDataAndType(sourceUri, "image/*")
                putExtra("crop", "true")
                putExtra("scale", true)
                putExtra("return-data", false)
                putExtra(MediaStore.EXTRA_OUTPUT, croppedPhotoUri)
                putExtra("outputFormat", Bitmap.CompressFormat.JPEG.toString())
                addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_GRANT_WRITE_URI_PERMISSION)
            }

            val resInfoList = packageManager.queryIntentActivities(intent, PackageManager.MATCH_DEFAULT_ONLY)
            for (resolveInfo in resInfoList) {
                val packageName = resolveInfo.activityInfo.packageName
                grantUriPermission(packageName, sourceUri, Intent.FLAG_GRANT_READ_URI_PERMISSION)
                grantUriPermission(packageName, croppedPhotoUri, Intent.FLAG_GRANT_WRITE_URI_PERMISSION)
            }
            
            if (resInfoList.isNotEmpty()) {
                cropLauncher.launch(intent)
            } else {
                filePathCallback?.onReceiveValue(arrayOf(sourceUri))
                filePathCallback = null
            }
        } catch (e: Exception) {
            filePathCallback?.onReceiveValue(arrayOf(sourceUri))
            filePathCallback = null
        }
    }

    private fun cancelUpload() {
        filePathCallback?.onReceiveValue(null)
        filePathCallback = null
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK && webView.canGoBack()) {
            webView.goBack()
            return true
        }
        return super.onKeyDown(keyCode, event)
    }
}
