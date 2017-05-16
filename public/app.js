var app = function(){

  // create parent container and class
  var catClass = document.createElement('ul');
  catClass.classList.add('cat');

  // create first child container
  var catName = document.createElement('li');
  catName.innerText = "whiskers";

  // create 2nd child container (same level as above);
  var catFood = document.createElement('li');
  catFood.innerText = "bacon";

  // create the image, the third li
  var catImage = document.createElement('li');
  catImage.innerText = src="https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/4/16/enhanced-26552-1396642701-1.jpg"

// then need to append them to the parent element (just do it three times as they are all on the same level?)
catClass.appendChild(catName);
catClass.appendChild(catFood);
catClass.appendChild(catImage);


// then add it to the overall list of cats

var cats = document.getElementById("cats");
cats.appendChild(catClass);

}

window.onload = app;



// ul is the container for each cat. (like article in the class example)
// then there are three li elements - name, favourite food, and an image
// ul, li, li, li(img)