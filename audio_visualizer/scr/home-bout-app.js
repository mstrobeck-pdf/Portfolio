const template = document.createElement("template");
template.innerHTML = ` 
<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');


h1 {
    padding-left: 20px;
    font-size: 40px;
    font-family: 'Raleway', sans-serif;
    justify-content: center;
    text-align: center;
}
  
span {
    font-size: 20px;
    padding-left: 20px;
    display: block;
    justify-content: center;
    text-align: center;
}
</style>

<div>
	<h1>Project 3: Chaotic Muse</h1>
	<span> Chose a soundtrack & play with the image on the screen! </span>

    <span> Be sure to pick a background color. </span>
    <span> As a note to the user, when using stars or fireflies, you will not see that effect until the music plays. Another thing to consider is you can only have one background selected at a time: Winter Wonderland, Beachy Summer, or Average Day.
    <br>
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