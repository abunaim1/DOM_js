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

