import "./home-foot.js";
import"./home-head.js";
import "./home-bout-app.js";

"use strict"


window.onload = (e) => { 
    document.querySelector("#search").onclick = searchButtonClicked
};

//important values
let term = ""; //keeps an empty display term until further notice
let favButton;
//fields
const nameField = document.querySelector("#searchterm");
const prefix = "mrs8402-";
const nameKey = prefix + "name";
const storedName = localStorage.getItem(nameKey);

function searchButtonClicked(){


    //api access to the character section
    const access_pt_url = "https://rickandmortyapi.com/api/character/";

    //no api key is required, so time to make the url; this is the access point area
    let url = access_pt_url;

    //calls for ability to search whatever term is selected
    let searchingTerm = document.querySelector("#searchterm").value;
    term = searchingTerm;

    //checks for user input when search button is hit
    // runs if the user inputs a specific name
    if (searchingTerm.length > 1)
    {
        searchingTerm = encodeURIComponent(searchingTerm);
        url += "?name=" + searchingTerm + "&";
    }
    //if there is zero character length, it won't return a result
    else
    {
        url = url + "?";
    }
    

    //the main character values for the following: status, gender, and species 
    //note to self, no var allowed just let and const
    let statusId = document.querySelector("#statusId").value;
    let genderId = document.querySelector("#genderId").value;
    let speciesId = document.querySelector("#speciesId").value;

    statusId = encodeURIComponent(statusId);
    genderId = encodeURIComponent(genderId);
    speciesId = encodeURIComponent(speciesId);

    url += "&status=" + statusId;
    url += "&gender=" + genderId;
    url += "&species=" + speciesId;


    document.querySelector("#updates").innerHTML = "Attempting to locate <b>" + term + "</b>";

    //pulls all the data together for display results
    getData(url);
}


//fetch function
function getData(url) {
    fetch(url)
    .then(response => response.json())
    .then(rm => displayResults(rm.results))
    //.then(data => console.log(data));
    .catch(error => {
        if(error == true) {
            document.querySelector("#updates").innerHTML = "There is no existing character with these parameters";
            console.log("There is no exisiting character");
        } 
    });
}


const displayResults = rm => {

    /*
    let noResults = rm.results.length;
    if (noResults == 0){
        document.querySelector("#updates").innerHTML = "No Search Results found! Try again and either remove a filter or check your spelling.";
        console.log("no results found");
        return;
    }
    */

    let imgResult;
    let name;
    let gender;
    let species;
    let status;

    let addTo;

    let str_length = "";
    
    //for each character found, generates information for it
    rm.forEach(rm => {

        let addTo = document.createElement('p');
        favButton = document.createElement("button");
        favButton.innerHTML = "<3";
        
        imgResult = rm.image;
        name = rm.name;
        gender = rm.gender;
        species = rm.species;
        status = rm.status;

        //creates all the information for x results
        addTo = `<h5>Name: ${name}</h5>`;
        addTo += `<div class="infos"><h5>Gender:</h5> <p>${gender}</p>`;
        addTo += `<h5>Status:</h5> <p>${status}</p>`;
        addTo += `<h5>Species:</h5> <p>${species}</p></div>`;
        addTo += `<div class='pics'><img src='${imgResult}'/></div><hr>`;

        str_length += addTo; //adds everything together to appear in right order

        //updates all information about a character
        document.querySelector("#characterInformation").innerHTML = str_length;
    });
    document.querySelector("#updates").innerHTML = "All results for <b>" + term + "</b> have been located.";

    document.querySelector("#resultsLike").onclick = displayLike();
}

//if the 'like button' is added, it adds the searched term to the community page
function displayLike() {
        const addButton = document.getElementById("resLike");
        addButton.addEventListener("click",() => {
            addtoFav(term);
            console.log("added " + term + " to favs");
        });
}

function addtoFav(term) {
    favorites(term);
}

//firebase coding
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, set, push, onValue, get, update, increment } from  "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAHWs_1lwQy26WvjfmiyJdG5RrtXwjeiWo",
    authDomain: "favorites-32984.firebaseapp.com",
    projectId: "favorites-32984",
    storageBucket: "favorites-32984.appspot.com",
    messagingSenderId: "537954906097",
    appId: "1:537954906097:web:b00f3c59f1323875455e50"
};
const app = initializeApp(firebaseConfig);
console.log(app);

//if it is a favorite term, the likes go up by 1 each time it's hit
const favorites = term => {
  const db = getDatabase();
  const favRef = ref(db, 'favorites/' + term);
  set(favRef, {
      term,
      likes: increment(1)
  });
};

const db = getDatabase();
const favoritesRef = ref(db, 'favorites/');


//for everything 'liked or added' into the community page, it updates the community page to the new number.
function communityFav(snapshot){
    snapshot.forEach(term => {
      const childKey = term.key;
      const childData = term.val();
      console.log(childKey,childData);
      let listDisplay = document.createElement("li");
      listDisplay.innerHTML = `<div class="flex-arrange">Name: ${childKey} <br> Likes: ${childData.likes} <br></div> `;
      document.querySelector("#commList").appendChild(listDisplay);      
    });
}
onValue(favoritesRef,communityFav, {onlyOnce: false});



//local storage - whatever the last searched term is, it gets added into local storage for you to come back later
if (storedName){
	nameField.value = storedName;
}
else{
	nameField.value = "Summer";
    term = nameField.value;
}
nameField.onchange = e=>{ localStorage.setItem(nameKey, e.target.value); };