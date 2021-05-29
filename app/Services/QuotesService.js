import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxApi } from "./SandboxAPI.js"

let url = 'quotes'

class QuotesService {

    async getQuote() {
        let res = await sandboxApi.get(url)
        ProxyState.quote = new Quote(res.data)
        console.log(ProxyState.quote)
    }
}

export const quotesService = new QuotesService()