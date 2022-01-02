// const lib = require("./check_error");

function wait_for_run_button() {
    var element = document.getElementsByTagName("body")[0].getElementsByClassName("container")[0].getElementsByClassName("wrapper")[0].getElementsByClassName("editor-wrapper")[0].getElementsByClassName("editor-desktop-top-bar")[0].getElementsByClassName("desktop-top-bar__btn-wrapper")[0].getElementsByClassName("desktop-run-button")[0];
    if (!element) {
        setTimeout(wait_for_run_button, 100);
        return;
    }
    
    var el2 = document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0]
    .getElementsByClassName("ace_layer ace_marker-layer")[0];
    if (el2 != undefined){
        
        document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0]
        .getElementsByClassName("ace_layer ace_marker-layer")[0].style.height = "fit-content";
        document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].style.height = "fit-content";
    
    }

    document.getElementsByTagName("body")[0].getElementsByClassName("container")[0].getElementsByClassName("wrapper")[0].getElementsByClassName("editor-wrapper")[0].getElementsByClassName("editor-desktop-top-bar")[0].getElementsByClassName("desktop-top-bar__btn-wrapper")[0].getElementsByClassName("desktop-run-button")[0]
    .addEventListener("click", clicked);
}


function clicked() {
    setTimeout(check_for_changes, 500);
}


function check_for_changes() {

    var code = document.getElementById("editor").getElementsByClassName("ace_scroller")[0].innerText;
    console.log(code);

    var error_message = document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].innerText;
    error = error_message;

    if (error_message.length <= 0) {
        setTimeout(check_for_changes, 100);
        return;
    }
    else{
        error_message = error_message.substring(0, error_message.length -2);
        console.log(error_message);
    }
  
    setTimeout(send_text_to_server.bind(null, error_message, code), 250);
}


function send_text_to_server(error, code) {

    var request = new XMLHttpRequest();

     request.onreadystatechange = function() {
        if (request.readyState === 4) {
            var json_data = JSON.parse(request.response).items;
            var str = "";
            solutions = [];
            for (let i = 0; i < json_data.length; i++) {
                str += json_data[i].body;
                solutions.push(json_data[i].body);
            }
            setTimeout(show_in_tab, 500);
        }
    }
    var number_of_solutions = 3;
    var type = "find_solutions";
    request.open("POST", 'https://neginaryapour.pythonanywhere.com/', true);
    var msg = { type, error, code, number_of_solutions };
    var msgjson = JSON.stringify(msg);
    request.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    request.send(msgjson);
}


function show_in_tab(){
    
    console.log(solutions[0]);
    var pycee = document.getElementById("pycee");
    if (pycee == undefined){
        add_the_solution_tag();
    }
    
    var error_len =  document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].getElementsByTagName("div").length;
    var new_line = error_len/2;

    var check_error  = checkError(error);
    var result2 = correctWorld(error);

    var extra_content = ``;
    extra_content += `<div style="top: ` + (new_line * 22) + `px; z-index: 100; height: 100%; position: absolute; width: 100%;">`;
        extra_content += `<div id="backG" style=" margin: 10px; background-color: #E6D7F5; padding: 10px; border-radius: 6px;">`;
            extra_content += `<div id="pycee-upper-head">`;
                extra_content += "Pycee has found " + solutions.length + " solutions";
            extra_content += `</div>`;   

            extra_content += `<div id="pycee-body" style="margin: 10px;">`;
            if(check_error){
                extra_content += `<div style="font-family: Arial, Helvetica, sans-serif;">`;
                        extra_content += `<div id="solNumber"> Pycee Solution ` + `</div>`;
                        extra_content += `<div id="solution-body" style="width:100%; height: fit-content; white-space: pre-line;">`;
                            extra_content += "do you mean  "+`<code >`+ result2+"</code>" +" word ?" ;
                        extra_content += `</div>`;
                    extra_content += `</div>`;
            }
            
                var i = 0;
                for (i=0; i<solutions.length; i++){
                    extra_content += `<div style="font-family: Arial, Helvetica, sans-serif;">`;
                        extra_content += `<div id="solNumber"> Solution ` + (i+1) + `</div>`;
                        extra_content += `<div id="solution-body" style="width:100%; height: fit-content; white-space: pre-line;">`;
                            extra_content += solutions[i];
                        extra_content += `</div>`;
                    extra_content += `</div>`;
                }
                
            extra_content += `</div>`;           
        extra_content += `</div>`;
    extra_content += `</div>`;



    document.getElementById("pycee").style.minHeight = "1600px";
    document.getElementById("pycee").innerHTML = extra_content;

    // document.getElementById("terminal").getElementsByClassName("ace_scrollbar ace_scrollbar-v")[0].style.height = "2000px";
    
    document.getElementById("terminal").style.height = '1600px';
    document.getElementById("editor").style.height = '1600px';
    document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].style.height = "1600px";
    document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].style.height = "1600px";
    
    wait_for_run_button();
}


function add_the_solution_tag(){
    var t = document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0]
    .getElementsByClassName("ace_layer ace_marker-layer")[0];
    if (t === undefined ){
        setTimeout(add_the_solution_tag, 100);
        return;
    }
    var current_value = t.innerHTML;
    document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0]
    .getElementsByClassName("ace_layer ace_marker-layer")[0]
    .innerHTML = current_value + `<div id="pycee"></div>`;
}

keywords = [ "False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except"
    ,"finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise"
    ,"return","try","while","with","yield" , "print"];

function checkError(str)
{
    if(str.includes("is not defined")){
        keyword_array = str.split(" ");
        console.log(keyword_array);
        misspelled_world = keyword_array[13].slice(1,-1);
        return misspelled_world
    }
    return false;
}

// return the number of difference between missplelled_world and keyword
function getDifference(a, b)
{
    var string1 = a.split('');
    var string2 = b.split('');
    var compare = 0;
    var max ="";
    
    // var leng = Math.max(string1.length , string2.length)
    // if(string1.length > string2.length){
    //     max = "str1";
    // }
    // else {
    //     max = "str2";
    // }
       // if (max == "str1"){
        //     if(!string1.includes(string2[i])){
        //         compare++;
        //     }
        // }
        // else if(max == "str2"){
        //     if(!string2.includes(string1[i])){
        //         compare++;
        //     }
        // }
        
    // var arr = string1.length > string2.length ? string1 : string2; 
    var leng = string1.length;
    if (Math.abs(string2.length - string1.length) <2){
        for (let i = 0 ; i < leng ; i++){
            if(!string2.includes(string1[i])){
                compare++;
            }
        }
    }
    else {
        return (Math.abs(string2.length - string1.length))
    }
    
    return compare;   
}


// fine most simillar keyword to misspelled_world
function correctWorld(error)
{
    var misspelled_world = checkError(error);
    console.log("misspelled_world is "+misspelled_world);
    if(misspelled_world){
        console.log("in if")
        var result = [];
        for (let i=0 ; i <36 ; i++){
            console.log(".")
            console.log("difference is "+getDifference("print",misspelled_world))
            if(getDifference(misspelled_world,keywords[i]) <2 ){
                console.log("find it");
                result.push(keywords[i])
            }
        }
        return result
    }
    else{
        return false;
    }
}

var solutions = [];
var error;
var globa_extra = "";
add_the_solution_tag();
wait_for_run_button();


