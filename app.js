// Document object model - DOM

// console.log("HELLO");
var h1 = document.getElementsByTagName("h1");
// console.log(h1);

var title = document.getElementById("title");
// console.log(title);

var child = document.getElementsByClassName("child");
// console.log(child);

// give a color in a element
document.getElementById("title").style.color = "red ";

// remove style from a element
document.getElementById("title").style.removeProperty("color");

var img = document.getElementById("img");

// console.log(img.getAttribute("src"));

img.setAttribute("alt", "Profile picture");
var gett = img.getAttribute("alt");
// console.log(gett);

img.classList.add("testClass");
// console.log(img)

var hero = document.getElementById("hero");
// console.log(hero.innerText);

var input = document.getElementById("input");
// console.log(input.value);

var parent = document.getElementById("parent");
// console.log(parent.innerHTML);

var testDiv = document.getElementsByClassName("test");
// console.log(testDiv);
// console.log(testDiv[0]);
// console.log(testDiv[0].childNodes);
// console.log(testDiv[0].childNodes[0]);
// console.log(testDiv[0].childNodes[0].parentNode.parentNode.parentNode.parentNode);

var newDiv = document.getElementById("newDiv");

function createE() {
  var p = document.createElement("p");
  p.innerText = "I am created in js file";
  newDiv.appendChild(p);
}
createE();

document.getElementById("btn-id").addEventListener("click", function(e){
    var inputValue = document.getElementById("input").value;
    // console.log(inputValue);
});

document.getElementById("input").addEventListener("blur", function(e){
    // console.log(e.target.value);
});

function getInput(e){
    // console.log("Exceptional Hello");
}

function getClick(e){
    var naim = document.getElementById("naim").value;
    console.log(naim)
}