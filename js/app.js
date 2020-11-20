'use strict';


// global variables

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var views = [];
var votes = [];

var allProducts = [];
var renderQueue = [];
var clicks = [];
var maxClicks = 25;

// elements from the DOM
var myContainer = document.getElementById('container');
var results = document.getElementById('results');
var imgOneEl = document.getElementById('img-one');
var imgTwoEl = document.getElementById('img-two');
var imgThreeEl = document.getElementById('img-three');
var myList = document.getElementById('list');

// Constructor
function Product(name) {
  this.name = name;
  this.src = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}



// Functions
// instantiate all products from Productnames array
function instantiateProducts(arr){
  for (var i = 0; i < arr.length; i++){
    new Product(arr[i]);
  } 
}



// random index
function getRandomIndex(arr){
  return Math.floor(Math.random() * arr.length);
}

// populate the render queue
function populateRenderQueue(arr){
  // uses constructor to 
  while (arr.length > 0){
    arr.shift();
  }
  while (arr.length < 3){
    var item = getRandomIndex(allProducts);
    while (arr.includes(item)){ 
      item = getRandomIndex(allProducts);
    }
    arr.push(item);
  }
}

// populate images
function populateImages(element, product){
  element.src = allProducts[product].src;
  element.alt = allProducts[product].name;
  allProducts[product].views++;
}

// render products
function renderProducts(){
  populateRenderQueue(renderQueue);
  var prodOne = renderQueue[0];
  var prodTwo = renderQueue[1];
  var prodThree = renderQueue[2];

  populateImages(imgOneEl, prodOne);
  populateImages(imgTwoEl, prodTwo);
  populateImages(imgThreeEl, prodThree);

}

instantiateProducts(productNames);
renderProducts();
// render results in list

// get data to render in chart

// render results in chart
function renderResults(){
  for (var i = 0; i < allProducts.length; i++) {
    // create element, give content, append to DOM
    var li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes and was seen ${allProducts[i].views} times.`;
    myList.appendChild(li);
  }

}




// event handler
function handleClick(event){
  var clickedProduct = event.target.alt;
  clicks++;

  for (var i = 0; i < allProducts.length; i++){
    // looks at all the name properties inside the products array and compares them to img alt property
    if (clickedProduct === allProducts[i].name){
      allProducts[i].votes++;
      // if true we have the correct product object and can increment its votes
    }
  }

  renderProducts();
  if (clicks === maxClicks){
    myContainer.removeEventListener('click', handleClick);
    
  }

}

function handleResults(event){
  if (clicks === maxClicks){
    renderResults();
  }
  else {
    window.alert("Please finish voting first");
  }
  
}


// event listener
myContainer.addEventListener('click', handleClick);
results.addEventListener('click', handleResults);
