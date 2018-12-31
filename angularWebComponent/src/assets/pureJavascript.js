class MyComponent extends HTMLElement {

    constructor() {
        super();

        this._person = null;

        this._$name = null;
        this._$surname = null;
        this._$show = null;

        this.clickEvent = new CustomEvent("print", {
            bubbles: true,
            cancelable: false,
            person: null
          });
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                input {
                    width: 50%;
                }
                .wc {
                    width: 50%;
                }
            </style>
            <p class='wc text-primary'>Web Component</p>
            <p class='wc text-secondary'>Click on print button to print full name in Angular component</p>
            <input type="text" name="name" id="name">
            <input type="text" name="surname" id="surname">
            <br/>
            <input type="button" id="show" value="Print" />
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