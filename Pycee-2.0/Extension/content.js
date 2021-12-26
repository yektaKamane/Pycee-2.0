
function wait_for_run_button() {
    var element = document.getElementsByTagName("body")[0].getElementsByClassName("container")[0].getElementsByClassName("wrapper")[0].getElementsByClassName("editor-wrapper")[0].getElementsByClassName("editor-desktop-top-bar")[0].getElementsByClassName("desktop-top-bar__btn-wrapper")[0].getElementsByClassName("desktop-run-button")[0];
    if (!element) {
        setTimeout(wait_for_run_button, 100);
        return;
    }
    document.getElementsByTagName("body")[0].getElementsByClassName("container")[0].getElementsByClassName("wrapper")[0].getElementsByClassName("editor-wrapper")[0].getElementsByClassName("editor-desktop-top-bar")[0].getElementsByClassName("desktop-top-bar__btn-wrapper")[0].getElementsByClassName("desktop-run-button")[0]
    .addEventListener("click", clicked);
}


function clicked() {
    // console.log("run button clicked");
    setTimeout(check_for_changes, 500);
}


function check_for_changes() {

    var code = document.getElementById("editor").getElementsByClassName("ace_scroller")[0].innerText;
    console.log(code);

    var error_message = document.getElementById("terminal").innerText;
    error_message = error_message.substring(0, error_message.length -2);
    console.log(error_message);

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
    request.open("POST", 'http://127.0.0.1:5000', true);
    var msg = { error, code };
    var msgjson = JSON.stringify(msg);
    request.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    request.send(msgjson);
}


function show_in_tab(){
    
    console.log(solutions);

    var current_content = document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].innerHTML;
    var error_len =  document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].getElementsByTagName("div").length;
    var new_line = error_len/2;
    console.log(new_line);

    var n = document.getElementById("terminal").style.height;
    console.log(n);
    document.getElementById("terminal").style.height = ((new_line + 1) * 22) + "px"; // make this an even bigger number
    n = document.getElementById("terminal").style.height;
    console.log(n);

    document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].innerHTML =  
    current_content 
    + `<div class="ace_content" style="top: ` + (new_line * 22) + `px; z-index: 100;"> pycee </div>`;
    // "";
    // var i = 0;
    // var output_text = ``;
    // var pycee_head = 
    // `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` + 
    // `<p style="margin-left: 15px; "> Pycee found ` + solutions.length + " solutions </p>" + '</div>';

    // output_text += pycee_head;
    
    // var solutions_text = `<div id="pycee-solutions" style="margin: 0 10px;">`;
    // for (i=0; i<solutions.length; i++){
    //     solutions_text += `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + (i+1) + ": </p>";
    //     solutions_text += `<p style="margin: 0 10px;">` + solutions[i] + "</p>";
    //     solutions_text += '<br>'
    // }
    // solutions_text += '</div>';

    // output_text += solutions_text;
    // console.log(output_text);

    // document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].innerHTML =  current_content 
    // + '<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">' 
    // + output_text + '</div>';

    wait_for_run_button();
}


var solutions = [];
wait_for_run_button();
//document.getElementById("d").style.height = "calc(100% - 2.5px)";


