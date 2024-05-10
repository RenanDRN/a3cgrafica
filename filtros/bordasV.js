function bordasV(imageLab) {
    let fatorCorte = 0.05
    for (let y = 1; y <= imageLab.image2.height; y++) {
        for (let x = 1; x <= imageLab.image2.width; x++) {
            let p1 = imageLab.image2.getPixel(x, y)
            let p2 = imageLab.image2.getPixel(x, y + 1)
            let variacao = p2.r - p1.r
            if (variacao < 0) variacao = variacao * -1
            if (variacao > fatorCorte * 255) {
                let pixel = { r: 255, g: 255, b: 255, a: 255 }
                imageLab.image2.setPixel(x, y, pixel)
            } else {
                let pixel = { r: 0, g: 0, b: 0, a: 255 }
                imageLab.image2.setPixel(x, y, pixel)
            }
        }
    }
    imageLab.image2.refresh()
}

export default bordasV