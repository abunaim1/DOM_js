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