import sharp from 'sharp';

async function run() {
    try {
        const imgPath = 'public/images/kbk-logo-full.png';
        const metadata = await sharp(imgPath).metadata();
        console.log('Original metadata:', metadata.width, 'x', metadata.height);

        // Create a white square based on the max dimension + padding (optional) to look nice
        const size = Math.max(metadata.width, metadata.height);
        // adding minimal padding
        const pad = Math.floor(size * 0);
        const newSize = size + (pad * 2);

        await sharp({
            create: {
                width: newSize,
                height: newSize,
                channels: 4,
                background: { r: 255, g: 255, b: 255, alpha: 1 }
            }
        })
            .composite([{ input: imgPath, gravity: 'center' }])
            .toFile('public/images/favicon-white-bg.png');
        console.log('Successfully generated favicon-white-bg.png');
    } catch (e) {
        console.error(e);
    }
}
run();
