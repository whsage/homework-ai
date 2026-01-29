/**
 * 图片压缩工具
 * 目标：将图片压缩到合理大小（如1MB以内），长边不超过 1920px
 * 这能显著提高移动端上传速度和 API 响应速度
 */
export const compressImage = async (file) => {
    // 如果不是图片，或者已经是小图片（小于 500KB），直接返回
    if (!file.type.startsWith('image/') || file.size < 500 * 1024) {
        return file;
    }

    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);

        img.onload = () => {
            URL.revokeObjectURL(url);

            // 计算新尺寸
            let width = img.width;
            let height = img.height;
            const maxSize = 1920; // 限制最大边长

            if (width > height && width > maxSize) {
                height = (height * maxSize) / width;
                width = maxSize;
            } else if (height > width && height > maxSize) {
                width = (width * maxSize) / height;
                height = maxSize;
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // 压缩质量 0.7 (JPEG)
            canvas.toBlob((blob) => {
                if (blob) {
                    // 如果压缩后反而变大了（极少见），就用原图
                    if (blob.size > file.size) {
                        resolve(file);
                        return;
                    }

                    // 创建新文件对象
                    const newFile = new File([blob], file.name.replace(/\.[^.]+$/, '.jpg'), {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });

                    console.log(`🖼️ 图片已压缩: ${(file.size / 1024 / 1024).toFixed(2)}MB -> ${(newFile.size / 1024 / 1024).toFixed(2)}MB`);
                    resolve(newFile);
                } else {
                    reject(new Error('Canvas to Blob failed'));
                }
            }, 'image/jpeg', 0.7);
        };

        img.onerror = (error) => reject(error);
        img.src = url;
    });
};
