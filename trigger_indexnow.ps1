$url = "https://www.bing.com/indexnow"
$payload = @{
    host        = "ai7miao.com"
    key         = "8680d220817c46238b975e14d60d3d4b"
    keyLocation = "https://ai7miao.com/8680d220817c46238b975e14d60d3d4b.txt"
    urlList     = @(
        "https://ai7miao.com/",
        "https://ai7miao.com/faq",
        "https://ai7miao.com/math-tutoring",
        "https://ai7miao.com/new",
        "https://ai7miao.com/statistics",
        "https://ai7miao.com/history",
        "https://ai7miao.com/settings",
        "https://ai7miao.com/login",
        "https://ai7miao.com/register"
    )
}

$jsonPayload = $payload | ConvertTo-Json

Write-Host "Submitting $($payload.urlList.Count) pages to IndexNow..."

try {
    $response = Invoke-RestMethod -Uri $url -Method Post -Body $jsonPayload -ContentType "application/json"
    Write-Host "SUCCESS: IndexNow notification sent!"
    Write-Host "Response: $response"
}
catch {
    Write-Host "ERROR: $($_.Exception.Message)"
}
