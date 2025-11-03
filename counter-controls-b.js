class CounterControlsB extends HTMLElement {
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
        // Ambil ID target dari atribut
        this.targetId = this.getAttribute('target');

        this.shadowRoot.getElementById('plus')
            .addEventListener('click', () => this.updateTarget(1));
        this.shadowRoot.getElementById('minus')
            .addEventListener('click', () => this.updateTarget(-1));
    }

    updateTarget(delta) {
        if (!this.targetId) return;
        const target = document.getElementById(this.targetId);
        if (target && typeof target.count !== 'undefined') {
            target.count += delta;
        }
    }
}

customElements.define('counter-controls-b', CounterControlsB);