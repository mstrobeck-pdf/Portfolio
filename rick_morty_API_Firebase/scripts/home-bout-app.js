const template = document.createElement("template");
template.innerHTML = ` 
<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');

h1 {
    font-size: 40px;
    font-family: 'Raleway', sans-serif;
}
  
span {
    font-size: 20px;
}
</style>

<div>
	<h1>Rick and Morty Character Finder</h1>
	<span>Click on the image or select the character finder tab in order to dive in on your adventure!</span>
</div>
`;

class homePg extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.h1 = this.shadowRoot.querySelector("h1");
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attributeName, oldVal, newVal) {
        console.log(attributeName, oldVal, newVal);
        this.render();
    }

    static get observedAttributes() {
        return ["data-title"];
    }

    render() {
        const title = this.dataset.title ? this.dataset.title: "About Page";
        this.h1.innerHTML = `${title}`;
    }
} //end of class

customElements.define('home-bout-app', homePg);