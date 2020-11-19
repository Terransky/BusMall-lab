
'use strict';
//code along with Ryan

// create some goat objects
// will have an array of goat objects and randomly display 2 DIFFERENT goats on the page
// we will click on these goats to vote
// we will track our clicks
// when we hit 10 clicks we
// when the polls have closed, we render the results
// results: the name of the goat, number of times it was viewed, and the number of votes received 


// global variables

var goats = [];
var totalClicksAllowed = 10;
var clicks = 0;
var myContainer = document.getElementById('container');
var imgOneEl = document.getElementById('image-one');
var imgTwoEl = document.getElementById('image-two');
var myList = document.getElementById('list');



// constructor

function Goat(name, src) {
  this.name = name;
  this.src = `images/${name}.jpg`;
  this.views = 0;
  this.vites = 0;
  goats.push(this);
}





//functions

function getRandomGoatIndex(){
  return Math.floor(Math.random() * goats.length) 
}

var goatOne = 0;
var goatTwo = 0;

function chooseGoats() {
  goatOne = getRandomGoatIndex();
  goatTwo = getRandomGoatIndex();
  // with more than 2 objects, it requires more comparisons. Use an array to compare indices in, maybe with a for loop? or a .includes? 
  while (goatOne === goatTwo){
    goatTwo = getRandomGotIndex();
  }
}

function renderGoats(){
  imgOneEl.src = goats[goatOne].src;
  imgOneEl.alt = goats[goatOne].name;
  goats[goatOne].views++;

  imgTwoEl.src = goats[goatTwo].src;
  imgTwoEl.alt = goats[goatTwo].name;
  goats[goatTwo].views++;

}

function renderResults(){
  for (var i = 0; i < goats.length; i++) {
    // create element, give content, append to DOM
    var li = document.createElement('li');
    li.textContent = `${goats[i].name} had ${goats[i].votes} votes and was seen ${goats[i].views} times.`;
    myList.appendChild(li);
  }

}

// executable code

new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-away');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');



renderGoats();



// event handler

function handleClick(event){
  var clickedGoat = event.target.alt;
  clicks++;

  for (var i = 0; i < goats.length; i++){
    // looks at all the name properties inside the goat array and compares them to img alt property
    if (clickedGoat === goats[i].name){
      goat[i].votes++;
      // if true we have the correct goat object and can increment its votes
    }
  }

  renderGoats();
  if (clicks === totalClicksAllowed){
    myContainer.removeEventListener('click', handleClick);
    renderResults();
  }

}





// event listener


