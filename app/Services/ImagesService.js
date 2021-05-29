import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandboxApi } from "../Services/SandboxAPI.js"
class ImagesService {

    async getImage() {
        let res = await sandboxApi.get('images')
        ProxyState.image = new Image(res.data)

    }
}

export const imagesService = new ImagesService()