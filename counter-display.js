class CounterDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._value = 0;
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Lorem Ipsum Title';
        const value = parseInt(this.getAttribute('value')) || 0;
        this._value = value;

        this.shadowRoot.innerHTML = `
            <style>
                .display {
                    background-color: #FDCEDF;
                    padding: 30px;
                    width: 240px;
                    border: 1px solid #F875AA;
                    font-family: monospace;
                    border-radius: 15px;
                    text-align: center;
                }
                .title {
                    font-size: 1.2rem;
                    margin-bottom: 4px;
                }
                .value {
                    font-size: 1.2rem;
                }
                .number {
                    font-weight: bold;
                    font-style: italic;
                }
            </style>
            <div class="display">
                <div class="title">${title}</div>
                <div class="value">Value: <span class="number">${value}</span></div>
            </div>
        `;
    }

    set count(val) {
        this._value = val;
        const number = this.shadowRoot.querySelector('.number');
        if (number) {
            number.textContent = val;
        }
    }

    get count() {
        return this._value;
    }
}

customElements.define('counter-display', CounterDisplay);