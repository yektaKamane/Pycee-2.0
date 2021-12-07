
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
    console.log("Run button is clicked");

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
    
    /*
    var solutionArea = document.getElementById("output")
    var solution_text = "found 3 solutions: ....";
    //console.log(solutionArea);
    solutionArea.innerHTML += `<div>` + solution_text + `</div>`;
    //console.log(solutionArea);
    console.log(code_text);*/

    document.getElementById("d").style.height = "350px" //change heigth of output box
    var solution_text = "found 5 solutions: ....";

    var el = document.createElement("div");   //create a div that contain all results from stackoverflow  
    el.setAttribute("id", "result");   
    document.getElementById("output").appendChild(el);    //add this div to div output
    el.innerHTML += `<div id="d1">` + solution_text + `</div>`;      // print the number of result that found   
   
    var el2 = document.createElement("ul");    //create list for slutions
    el2.setAttribute("id", "list"); 
    document.getElementById("result").appendChild(el2);


    var tx = 
    `Generally, it means that you are providing an index for which a list element does not exist.
    E.g, if your list was [1, 3, 5, 7], and you asked for the element at index
    10, you would be well out of bounds and receive an error, as only elements 0
    through 3 exist.`

    for(i=0 ; i<5 ; i++){    //in this loop create items of list
        var el3 = document.createElement("li");
        el3.setAttribute("id", i.toString());              
        document.getElementById("list").appendChild(el3);         
        
        var el4 = document.createElement("div");     // adiv for number of solution
        el4.setAttribute("id", "df"+i.toString());             
        var textnode = document.createTextNode("solution "+(i+1)+" :");         
        el4.appendChild(textnode); 
        document.getElementById(i.toString()).appendChild(el4);

        var el5 = document.createElement("div");    // a div for show solution
        el5.setAttribute("id", "ds"+i.toString());             
        var textnode2 = document.createTextNode(tx);         
        el5.appendChild(textnode2);
        document.getElementById(i.toString()).appendChild(el5); 

    
    }
    // console.log(solutionArea);
    // solutionArea.innerHTML += `<div>` + solution_text + `</div>`;
    // console.log(solutionArea);
    // output the results in that text box with other outputs

    chrome.runtime.sendMessage({todo: "btn_is_pushed"});
    sendButtonMssg1();
}


function stopTheCode(){
    console.log("Program stopped");
    chrome.runtime.sendMessage({todo: "btn_is_pushed"});
    sendButtonMssg2();
}

var runButton = document.getElementById("run-btn");
runButton.addEventListener("click", runTheCode);


