
chrome.runtime.sendMessage({todo: "showpageaction"});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "load"){
        console.log("load");
        var node = document.getElementsByTagName("body")[0].getElementsByClassName("notebook-vertical")[0];
        console.log(node);
        //console.log(x);

        var text = node.textContent;
        var text2 = node.innerHTML;

        console.log(text);
        node.style.backgroundColor = "blue";
    }

})
