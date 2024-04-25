window.onload = function () {

    const newPixels = Array(625).fill().map(() => document.createElement('div'));

    newPixels.forEach(pixel => {
        pixel.className = 'pixel';
        pixel.style.backgroundColor = '#fff';
        pixel.style.border = 'none';
        pixelArt.appendChild(pixel);
    });

    // Substitua esta linha pela sua variável que contém as informações do arquivo
    const colorsArray = ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 0, 0)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 5, 5)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(138, 0, 0)","rgb(158, 218, 255)","rgb(158, 218, 255)","rgb(158, 218, 255)","rgb(138, 0, 0)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(138, 0, 0)","rgb(158, 218, 255)","rgb(158, 218, 255)","rgb(158, 218, 255)","rgb(138, 0, 0)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(138, 0, 0)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(138, 0, 0)","rgb(138, 0, 0)","rgb(138, 0, 0)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(138, 0, 0)","rgb(138, 0, 0)","rgb(220, 235, 5)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 168, 11)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(138, 0, 0)","rgb(138, 0, 0)","rgb(138, 0, 0)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(254, 255, 209)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 168, 11)","rgb(255, 255, 255)","rgb(0, 168, 11)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(0, 168, 11)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(0, 168, 11)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)","rgb(30, 255, 0)"];

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

    (async function () {
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
    })();
}