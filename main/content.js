
chrome.runtime.sendMessage({todo: "showpageaction"});

function sendButtonMssg1(){
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if (request.todo == "run"){
            var stopButton = document.getElementById("stop-btn");
            stopButton.addEventListener("click", stopTheCode);
        }
    })
}

function sendButtonMssg2(){
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if (request.todo == "run"){
            runButton = document.getElementById("run-btn");
            runButton.addEventListener("click", runTheCode);
        }
    })
}

function runTheCode(){
    //console.log("Run button is clicked");

    var rawCodeText = document.getElementsByTagName("body")[0].getElementsByTagName("div")[0]
    .getElementsByClassName("main-content d-flex")[0].getElementsByClassName("container")[0]
    .getElementsByClassName("split")[0].getElementsByTagName("div")[0]
    .getElementsByClassName(" ace_editor ace-tm")[0].getElementsByClassName("ace_scroller")[0]
    .getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].getElementsByClassName("ace_line");

    var i=0;
    var code_text = ``; 
    for (i=0; i<rawCodeText.length; i++){
        code_text += rawCodeText[i].textContent;
        code_text += `\n`;
    }

    //console.log(code_text);
    const fsLibrary = require('fs');
    // Write data in 'newfile.txt'
    fsLibrary.writeFile('code.py', code_text, (error) => {
        // In case of a error throw err exception.
        if (error) throw err;
    })

    var solutionArea = document.getElementById("output")
    var solution_text = "found 3 solutions: ....";
    //console.log(solutionArea);
    solutionArea.innerHTML += `<div>` + solution_text + `</div>`;
    //console.log(solutionArea);
    // output the results in that text box with other outputs

    chrome.runtime.sendMessage({todo: "btn_is_pushed"});
    sendButtonMssg1();
}

function stopTheCode(){
    //console.log("Program stopped");
    chrome.runtime.sendMessage({todo: "btn_is_pushed"});
    sendButtonMssg2();
}

var runButton = document.getElementById("run-btn");
runButton.addEventListener("click", runTheCode);

