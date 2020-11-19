'use strict';


// global variables

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var views = [];
var votes = [];

var allProducts = [];
var renderQueue = [];
var clicks = [];
var maxClicks = [];

// elements from the DOM
var myContainer = document.getElementById('container');
var imgOneEl = document.getElementById('img-one');
var imgTwoEl = document.getElementById('img-two');
var imgThreeEl = document.getElementById('img-three');
var myList = document.getElementById('list');

// Constructor
function Product(name) {
  this.name = name;
  this.src = `../img/${name}.jpg`;
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
  instantiateProducts(productNames);
  while (arr.length > 0){
    arr.shift();
  }
  while (arr.length < 3){
    var item = getRandomIndex(allProducts);
    while (arr.includes(item)){
      item = getRandomGoatIndex(allProducts);
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

renderProducts();
// render results in list
// get data to render in chart
// render results in chart




// event handler
function handleClick(event)


// event listener
myContainer.addEventListener('click', handleClick);