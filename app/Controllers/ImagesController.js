import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"


function draw() {
    let imgElem = document.getElementById('bg-image')
    imgElem.style.backgroundImage = `url(${ProxyState.image.url})`
}
export class ImagesController {

    constructor() {
        ProxyState.on('image', draw)
        imagesService.getImage()

    }

    newImage() {
        imagesService.getImage()
    }
}