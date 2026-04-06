const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public', 'images', 'kbk-logo-full.png');
const appDir = path.join(__dirname, 'src', 'app');

// Copy to icon.png
fs.copyFileSync(src, path.join(appDir, 'icon.png'));
console.log('✅ Copied to src/app/icon.png');

// Copy to apple-icon.png
fs.copyFileSync(src, path.join(appDir, 'apple-icon.png'));
console.log('✅ Copied to src/app/apple-icon.png');

// Delete favicon.ico
const faviconPath = path.join(appDir, 'favicon.ico');
if (fs.existsSync(faviconPath)) {
  fs.unlinkSync(faviconPath);
  console.log('✅ Deleted src/app/favicon.ico');
} else {
  console.log('ℹ️  favicon.ico not found (already removed)');
}

console.log('\n🎉 Done! The KBK logo is now the favicon.');
