class CombinedCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const title = this.getAttribute('title') || 'Combined Counter';
        const value = parseInt(this.getAttribute('value')) || 0;

        this.shadowRoot.innerHTML = `
            <style>
                .wrapper {
                    padding: 10px;
                    width: 180px;
                    font-family: sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                counter-display {
                    display: block;
                }
            </style>
            <div class="wrapper">
                <counter-display id="display" title="${title}" value="${value}"></counter-display>
                <counter-controls id="controls"></counter-controls>
            </div>
        `;
    }

    connectedCallback() {
        const display = this.shadowRoot.getElementById('display');
        const controls = this.shadowRoot.getElementById('controls');
        controls.addEventListener('count-change', e => {
            display.count += e.detail.delta;
        });
    }
}

customElements.define('combined-counter', CombinedCounter);