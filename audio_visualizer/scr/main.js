/*
	main.js is primarily responsible for hooking up the UI to the rest of the application 
	and setting up the main event loop
*/

// We will write the functions in this file in the traditional ES5 way
// In this instance, we feel the code is more readable if written this way
// If you want to re-write these as ES6 arrow functions, to be consistent with the other files, go ahead!

import * as utils from './utils.js';
import * as audio from './audio.js';
import * as canvas from './canvas.js';
import * as header from './home-head.js';
import * as footer from './home-foot.js';
import * as about from './home-bout-app.js';

// 1 - here we are faking an enumeration
const DEFAULTS = Object.freeze({
	sound1  :  "media/New Adventure Theme.mp3"
});

function init(){
    
    audio.setupWebaudio(DEFAULTS.sound1);
	console.log("init called");
	console.log(`Testing utils.getRandomColor() import: ${utils.getRandomColor()}`);
    let canvasElement = document.querySelector("canvas"); // hookup <canvas> element
	setupUI(canvasElement);
    canvas.setupCanvas(canvasElement,audio.analyserNode);
    
    loop();
}
const drawParams = {
    changeBack : true,
    showBars : true,
    wintWond : false, 
    letsnow : false, 
    ornaments : false, 
    summ : true,
    fire : true,
    fli : false,
    snowDe : false,
    fall : false,
    rainy : false,
    leafy : false,
    insec : false,
    flow : false,
    apples : false,
    starry : true,
    pumpkins : false,
};


const barsbox = document.querySelector("#barsCB");
const changeb = document.querySelector("#colorpicker");

//winter customization
const winterWonderland = document.querySelector("#winter");
const flakes = document.querySelector("#snowFlakes");
const ornam = document.querySelector("#orn");

//summer
const summer = document.querySelector("#summer");
const fir = document.querySelector("#flamesFire");
const flies = document.querySelector("#fireflies");
const detailedSnow = document.querySelector("#detailSnow");

//fall and spring
const fallScene = document.querySelector("#sceneFall")
const raining = document.querySelector("#rain");
const leaf = document.querySelector("#leaves");
const insects = document.querySelector("#ins");

const flower = document.querySelector("#flowers");
const pumpk = document.querySelector("#pump");
const appl = document.querySelector("#apples");
const star = document.querySelector("#stars");

summer.checked = true;
star.checked = true;
fir.checked = true;
barsbox.checked = true;

"use strict"
function loop(){
    /*NOTE: This is teporary testing code that we will delete in Part II */
    requestAnimationFrame(loop);
    canvas.draw(drawParams);
    //1) creat a byte array(values of 0-255) to hold the audio data
    //normally, we do this once when the program starts up, NOT every frame
    let audioData = new Uint8Array(audio.analyserNode.fftSize/2);

    //2) populate the array of audio data *by reference* (i.e. by its address)
    //audio.analyserNode.getByteFrequencyData(audioData);

    //waveform data that represents change in the frequency bins (oscilloscope)
    audio.analyserNode.getByteTimeDomainData(audioData);

    //3) log out the array and the everage loudness(amplitude) of all the frequency bins
        console.log(audioData);

        console.log("-----Audio Stats-----");
        let totalLoudness = audioData.reduce((total, num) => total + num);
        let averageLoudness = totalLoudness/(audio.analyserNode.fftSize/2);
        let minLoudness = Math.min(...audioData); //ES6 spread operater
        let maxLoudness = Math.max(...audioData); // ditto
        //22050 kHz divided by 128 bins = 172.23 kHz per bin
        //the 12th element in array represents loudness at 2.067 kHz
        let loudnessAt2K = audioData[11];
        console.log(`averageLoudness = ${averageLoudness}`);
        console.log(`mindLoudness = ${minLoudness}`);
        console.log(`maxLoudness = ${maxLoudness}`);
        console.log(`loudnessAt2K = ${loudnessAt2K}`);
        console.log("---------------------")
}

function setupUI(canvasElement){

    //add .onclick even to button
    playButton.onclick = e =>{
        console.log(`audioCtx.state before = ${audio.audioCtx.state}`);
    
  
    //check if context is in suspended state (autoplay policy)
    if(audio.audioCtx.state == "suspended"){
        audio.audioCtx.resume();
    }
    console.log(`audioCtx.state ater = ${audio.audioCtx.state}`);
    if(e.target.dataset.playing == "no"){
        //if track is crrently paused, play it
        audio.playCurrentSound();
        e.target.dataset.playing = "yes"; //our CSS will set the test to "pause"
        //if track is playing, pause it
    }else{
        audio.pauseCurrentSound();
        e.target.dataset.playing = "no"; // our CSS will set the text to "play"
    }
};
    //C - hookup volume slider & label
    let volumeSlider = document.querySelector("#volumeSlider");
    let volumeLabel = document.querySelector("#volumeLabel");

    //add .oninput event to slider
	volumeSlider.oninput = e => {
        //set the gain
        audio.setVolume(e.target.value);
        //update value of label to match value of slider
        volumeLabel.innerHTML = Math.round((e.target.value/2 * 100));
    };
    
    //set value of label to match initial value of slider
    volumeSlider.dispatchEvent(new Event("input"));

    //D-- hokup track <Select>
    let trackSelect = document.querySelector("#trackSelect");
    //add .onchange event to <select>
    trackSelect.onchange = e => {
        audio.loadSoundFile(e.target.value);
        //pause the current track if it is playing
        if(playButton.dataset.playing == "yes"){
            playButton.dispatchEvent(new MouseEvent("click"));
        }
    }

    //draw bars
    barsbox.onclick = e => {
        if(drawParams.showBars == true) {
            drawParams.showBars = false;
        }
        else {
            drawParams.showBars = true;
        }
    }

    //change background
    changeb.onclick = e => {
        if(drawParams.changeBack == true) {
            drawParams.changeBack = false;
        }
        else {
            drawParams.changeBack = true;
        }
    }

    //winter customization
    winterWonderland.onclick = e => {
        console.log("wonderland being called");
        if(drawParams.wintWond == true) {
            drawParams.wintWond = false;
        }
        else {
            drawParams.wintWond = true;
        }
    }

    flakes.onclick = e => {
        if(drawParams.letsnow == true) {
            drawParams.letsnow = false;
        }
        else {
            drawParams.letsnow = true;
        }
    }

    ornam.onclick = e => {
        if(drawParams.ornaments == true) {
            drawParams.ornaments = false;
        }
        else {
            drawParams.ornaments = true;
        }
    }

    detailedSnow.onclick = e => {
        if(drawParams.snowDe == true) {
            drawParams.snowDe = false;
        }
        else {
            drawParams.snowDe = true;
        }
    }
    //summer customization
    summer.onclick = e => {
        if(drawParams.summ == true) {
            drawParams.summ = false;
        }
        else {
            drawParams.summ = true;
        }
    }

    fir.onclick = e => {
        if(drawParams.fire == true) {
            drawParams.fire = false;
        }
        else {
            drawParams.fire = true;
        }
    }

    flies.onclick = e => {
        if(drawParams.fli == true) {
            drawParams.fli = false;
        }
        else {
            drawParams.fli = true;
        }
    }

    //fall AND Spring customization
    fallScene.onclick = e => {
        if(drawParams.fall == true) {
            drawParams.fall = false;
        }
        else {
            drawParams.fall = true;
        }
    }

    leaf.onclick = e => {
        if(drawParams.leafy == true) {
            drawParams.leafy = false;
        }
        else {
            drawParams.leafy = true;
        }
    }

    raining.onclick = e => {
        if(drawParams.rainy == true) {
            drawParams.rainy = false;
        }
        else {
            drawParams.rainy = true;
        }
    }

    insects.onclick = e => {
        if(drawParams.insec == true) {
            drawParams.insec = false;
        }
        else {
            drawParams.insec = true;
        }
    }

    flower.onclick = e => {
        if(drawParams.flow == true) {
            drawParams.flow = false;
        }
        else {
            drawParams.flow = true;
        }
    }

    appl.onclick = e => {
        if(drawParams.apples == true) {
            drawParams.apples = false;
        }
        else {
            drawParams.apples = true;
        }
    }

    pumpk.onclick = e => {
        if(drawParams.pumpkins == true) {
            drawParams.pumpkins = false;
        }
        else {
            drawParams.pumpkins = true;
        }
    }

    star.onclick = e => {
        if(drawParams.starry == true) {
            drawParams.starry = false;
        }
        else {
            drawParams.starry = true;
        }
    }

 }; // end setupUI

export {init};

