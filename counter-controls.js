class CounterControls extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .controls {
                    display: flex;
                    border: 1px solid #AACB73;
                    width: 300px;
                }
                button {
                    flex: 1;
                    background-color: #DBE9B7;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    height: 30px;
                }
                button:not(:last-child) {
                    border-right: 1px solid #AACB73;
                }
                button:hover {
                    background-color: #F2BED1;
                }
            </style>
            <div class="controls">
                <button id="minus">-</button>
                <button id="plus">+</button>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.getElementById('plus')
            .addEventListener('click', () => this.emitChange(1));
        this.shadowRoot.getElementById('minus')
            .addEventListener('click', () => this.emitChange(-1));
    }

    emitChange(delta) {
        this.dispatchEvent(new CustomEvent('count-change', {
            detail: { delta },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('counter-controls', CounterControls);