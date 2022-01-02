


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
        .getElementsByClassName("ace_layer ace_marker-layer")[0].style.height = "1600px";
        document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].style.height = "1600px";
    }
    
    document.getElementsByTagName("body")[0].getElementsByClassName("container")[0].getElementsByClassName("wrapper")[0].getElementsByClassName("editor-wrapper")[0].getElementsByClassName("editor-desktop-top-bar")[0].getElementsByClassName("desktop-top-bar__btn-wrapper")[0].getElementsByClassName("desktop-run-button")[0]
    .addEventListener("click", clicked);
}


function clicked() {
    setTimeout(check_for_changes, 500);
}


function check_for_changes() {

    var code = document.getElementById("editor").getElementsByClassName("ace_scroller")[0].innerText;
    // console.log(code);

    var error_message = document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].innerText;

    if (error_message.length <= 0) {
        setTimeout(check_for_changes, 100);
        return;
    }
    else{
        error_message = error_message.substring(0, error_message.length -2);
        // console.log(error_message);
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
    document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].style.height = "1600px";
    
    console.log(solutions[2]);
    var pycee = document.getElementById("pycee");
    if (pycee == undefined){
        add_the_solution_tag();
    }
    
    var error_len =  document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].getElementsByTagName("div").length;
    var new_line = error_len/2;

    var extra_content = ``;
    extra_content += `<div style="top: ` + (new_line * 22) + `px; z-index: 100; height: 1600px; position: absolute; width: 100%;">`;
        extra_content += `<div id="backG" style=" margin: 10px; background-color: #E6D7F5; padding: 10px; border-radius: 6px;">`;
            extra_content += `<div id="pycee-upper-head">`;
                extra_content += "Pycee has found " + solutions.length + " solutions";
            extra_content += `</div>`;   

            extra_content += `<div id="pycee-body" style="margin: 10px;">`;
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

var solutions = [];
var globa_extra = "";

setInterval(function(){ 

    var el2 = document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0]
    .getElementsByClassName("ace_layer ace_marker-layer")[0];

    if (el2 != undefined){
        document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0]
        .getElementsByClassName("ace_layer ace_marker-layer")[0].style.height = "1600px";
        document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].style.height = "1600px";
    }

}, 50);

add_the_solution_tag();
wait_for_run_button();


