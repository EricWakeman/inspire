import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function drawQuote() {
    let quoteElem = document.getElementById('quote')
    let authorElem = document.getElementById('author')
    quoteElem.innerHTML = `<span>"${ProxyState.quote.content}"</span>`
    authorElem.innerHTML = `<i>-${ProxyState.quote.author}</i>`
}
export class QuotesController {

    constructor() {
        ProxyState.on('quote', drawQuote)
        quotesService.getQuote()

    }

    reveal() {
        document.getElementById('author').classList.remove('hidden')
    }
    conceal() {
        document.getElementById('author').classList.add('hidden')
    }

    newQuote() {
        quotesService.getQuote()
    }
}