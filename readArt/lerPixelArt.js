window.onload = function () {

    const newPixels = Array(625).fill().map(() => document.createElement('div'));

    newPixels.forEach(pixel => {
        pixel.className = 'pixel';
        pixel.style.backgroundColor = '#fff';
        pixel.style.border = 'none';
        pixelArt.appendChild(pixel);
    });

    const loadColorsButton = document.getElementById('loadColorsButton');

    loadColorsButton.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
            const colorsArray = JSON.parse(event.target.result);
            const uniqueColors = [...new Set(colorsArray)];

            const fillColor = (color) => {
                return new Promise(resolve => {
                    for (let i = 0; i < colorsArray.length; i++) {
                        if (colorsArray[i] === color) {
                            newPixels[i].style.backgroundColor = color;
                            newPixels[i].style.border = '1px solid black';
                        }
                    }
                    setTimeout(resolve, 1000);
                });
            };

            while (true) {
                for (let color of uniqueColors) {
                    await fillColor(color);
                }
                for (let pixel of newPixels) {
                    pixel.style.border = 'none';
                }
                await new Promise(resolve => setTimeout(resolve, 5000));
                for (let pixel of newPixels) {
                    pixel.style.backgroundColor = '#fff';
                }
            }
        };

        reader.readAsText(file);
    });
}