// Rw è un prefisso che aiuta a limitare il conflitto dei nomi
class RwRandomQuote extends HTMLElement{
    constructor(){
        super();

        // Definizioni variabili
        this._quotes = [
            'Quote 1',
            'Quote 2',
            'Quote 3'
        ];

        this._$quote = null; // mettere come prefisso $ è una convenzione per dire "elemento grafico"
        this._intervall = null; // _ (underscore) è una convenzione per dire privato
    }

    // Non usando lo shawdow DOM anche i nomi degli stili devono avere un prefisso
    connectedCallback(){
        this.innerHTML = `
        <style>
            .rw-container {
                width: 500px;
                margin: auto;
                border: dotted;
                padding: 20px;
            }
            .rw-container h1 {
                font-size: 20px;
                margin: 0;
            }
        </style>
        <div class="rw-container">
            <h1>Random quote:</h1>
            <p><span id="quote"></span></p>
        </div>
        `;

        this._$quote = this.querySelector("#quote");
        this._setInterval(this.getAttribute("interval")); // get value from the interval attribute
        this._render();
    }

    // Impostazione notifica cambio attributi:
    static get observedAttributes() {
        return ['interval'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this._setInterval(newValue);
    }

    _render(){
        if(this._$quote !== null) {
            const index = Math.floor(Math.random() * this._quotes.length);
            this.setAttribute("current-index", index); // si può anche aggiornare il valore di un attributo
            this._$quote.innerHTML = this._quotes[index];
        }
    }

    // Sett quote refresh rate
    _setInterval(value) {
        if(this._intervall !== null){
            clearInterval(this._intervall);
        }

        if(value > 0) {
            this._intervall = setInterval(() => this._render(), value);
        }
    }

    disconnectedCallback(){
        clearInterval(this._intervall);
    }
}

window.customElements.define("rw-random-quote", RwRandomQuote); // per il nome dell'elemento si usa la kebab notation