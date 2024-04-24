window.onload = function () {
    // Obtém as referências dos elementos HTML
    const pixelArt = document.getElementById('pixelArt');
    const saveButton = document.getElementById('saveButton');
    const colorPicker = document.getElementById('colorPicker');
    const clearButton = document.getElementById('clearButton');

    // Cria um array de novos elementos div para representar os pixels
    const newPixels = Array(625).fill().map(() => document.createElement('div'));

    // Define a cor atual como preto (#000000)
    let currentColor = '#000000';

    // Itera sobre cada pixel e configura o evento de clique para alterar a cor
    newPixels.forEach(pixel => {
        pixel.className = 'pixel';
        pixel.style.backgroundColor = '#fff';
        pixelArt.appendChild(pixel);

        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = currentColor;
        });
    });

    // Configura o evento de alteração do seletor de cor para atualizar a cor atual
    colorPicker.addEventListener('input', (event) => {
        currentColor = event.target.value;
    });

    // Configura o evento de clique do botão "Limpar" para resetar todas as cores dos pixels
    clearButton.addEventListener('click', () => {
        newPixels.forEach(pixel => {
            pixel.style.backgroundColor = '#fff';
        });
    });

    // Configura o evento de clique do botão "Salvar" para gerar uma imagem do desenho
    saveButton.addEventListener('click', () => {
        // Cria um elemento canvas para desenhar o pixel art
        const canvas = document.createElement('canvas');
        canvas.width = 250;
        canvas.height = 250;
        const context = canvas.getContext('2d');

        // Itera sobre cada pixel e desenha no canvas
        newPixels.forEach((pixel, index) => {
            const x = index % 25;
            const y = Math.floor(index / 25);
            context.fillStyle = pixel.style.backgroundColor;
            context.fillRect(x * 10, y * 10, 10, 10);
        });

        // Converte o canvas para uma imagem em formato PNG
        const image = canvas.toDataURL('image/png');

        // Cria um link de download para a imagem e simula o clique para iniciar o download
        const link = document.createElement('a');
        link.href = image;
        link.download = 'desenho.png';
        link.click();
    });

    // Obtém a referência do botão "Salvar Cores"
    const saveColorsButton = document.getElementById('saveColorsButton');

    // Configura o evento de clique do botão "Salvar Cores" para gerar um arquivo de texto com as cores
    saveColorsButton.addEventListener('click', () => {
        // Obtém um array de cores dos pixels
        const colorsArray = newPixels.map(pixel => pixel.style.backgroundColor);

        // Converte o array de cores para uma string JSON
        const colorsString = JSON.stringify(colorsArray);

        // Cria um blob de texto com a string de cores
        const blob = new Blob([colorsString], { type: "text/plain;charset=utf-8" });

        // Cria uma URL para o blob de texto e configura o link de download
        const url = URL.createObjectURL(blob);
        saveColorsButton.href = url;
        saveColorsButton.download = 'colors.txt';
    });
}

