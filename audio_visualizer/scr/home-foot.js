const template = document.createElement("template");
template.innerHTML = ` 
<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');

div {
    color: black;
    padding-left: 20px;
    padding-right: 20px;
}

footer {
    padding: 10px;
    background-image: linear-gradient(to right, lightskyblue, slateblue, darkblue);
    text-align: center;
    color: black;
    font-family: 'Raleway', sans-serif;
    
}
</style>

<footer>
&copy; Project 3 - Chaotic Muse - 2021
</footer>
`;

class homeFoot extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(attributeName, oldVal, newVal) {
        console.log(attributeName, oldVal, newVal);
        this.render();
    }

    static get observedAttributes() {
        return ["data-foot"];
    }

    render() {
        const foot = this.dataset.foot ? this.dataset.foot: "Chaotic Muse";
        this.innerHTML = `${foot}`;
    }
} //end of class

customElements.define('home-foot', homeFoot);