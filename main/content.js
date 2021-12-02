chrome.runtime.sendMessage({todo: "showpageaction"});
var node = document.getElementsByTagName("body")[0].getElementsByClassName("scripts")[0];
var x = document.getElementsByClassName("top-floater");
console.log(node);
console.log(x);
//alert(node);
var text = node.textContent;
//alert(text);
console.log(text);