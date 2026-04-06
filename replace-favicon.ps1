# Replace favicon files with kbk-logo-full.png
$logo = "public\images\kbk-logo-full.png"
$appDir = "src\app"

Copy-Item -Path $logo -Destination "$appDir\icon.png" -Force
Copy-Item -Path $logo -Destination "$appDir\apple-icon.png" -Force

if (Test-Path "$appDir\favicon.ico") {
    Remove-Item "$appDir\favicon.ico" -Force
    Write-Host "Deleted favicon.ico"
}

Write-Host "Done! icon.png and apple-icon.png updated with kbk-logo-full.png"
