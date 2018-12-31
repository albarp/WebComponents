class MyComponent extends HTMLElement {

    constructor() {
        super();

        this._person = null;

        this._$name = null;
        this._$surname = null;
        this._$show = null;

        this.clickEvent = new CustomEvent("click", {
            bubbles: true,
            cancelable: false,
            person: null
          });
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                p {
                    color: red;
                }
            </style>
            <br/>
            <input type="text" name="name" id="name">
            <input type="text" name="surname" id="surname">
            <input type="button"  id="show" />
        `;

        this._$name = this.querySelector("#name");
        this._$surname = this.querySelector("#surname");
        this._$show = this.querySelector("#show");

        this._$show.addEventListener("click", e => {
            e.preventDefault();
            this.clickEvent.person = this._person;
            this.dispatchEvent(this.clickEvent);
            console.log("clicked from Web Component");
        });
    }

    _render () {
        if(this._person) {
            this._$name.value = this._person.Name;
            this._$surname.value = this._person.Surname;
        }
    }

    set person(person) {
        this._person = person;
        this._render();
    }

    get person() {
        return this._person;
    }
}
window.customElements.define("my-component", MyComponent);