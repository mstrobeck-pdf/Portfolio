const template = document.createElement("template");
template.innerHTML = ` 
<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');

div {
    background-color: aquamarine;
    color: black;
    padding-left: 20px;
    padding-right: 20px;
}

header {
    padding: 10px;
    background-color:rgb(81, 168, 125);
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
}
</style>

<header>
    Rick & Morty Character Finder
</header>
`;

class homeHead extends HTMLElement {
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
        return ["data-head"];
    }

    render() {
        const head = this.dataset.foot ? this.dataset.head: "API";
        this.innerHTML = `${head}`;
    }
} //end of class

customElements.define('home-head', homeHead);