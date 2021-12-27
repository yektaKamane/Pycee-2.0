
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

    var error_message = document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].innerText;

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
    
    console.log(solutions);

    var current_content = document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].innerHTML;
    current_content = current_content.replaceAll(globa_extra, "");
    var error_len =  document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].getElementsByTagName("div").length;
    var new_line = error_len/2;

    document.getElementById("terminal").style.height = "700px"; // make this even bigger

    var extra_content = ``;
    extra_content += `<div class="ace_content" style="top: ` + (new_line * 22) + `px; z-index: 100; height: 100%;">`;
        extra_content += `<div style="height: fit-content; margin: 10px 30px; background-color: #E6D7F5; padding: 10px; border-radius: 6px;">`;
            extra_content += `<div id="pycee-upper-head" style="border-bottom: 1px solid black; margin: 10px;">`;
                extra_content += "Pycee has found " + solutions.length + " solutions";
            extra_content += `</div>`;   

            extra_content += `<div id="pycee-body">`;
                var i = 0;
                for (i=0; i<solutions.length; i++){
                    extra_content += `<div style="color: purple; font-size: 17 px;">`;
                        extra_content += `Solution` + (i+1);
                    extra_content += `</div>`;
                }
                
            extra_content += `</div>`;           
        extra_content += `</div>`;
    extra_content += `</div>`;

    globa_extra = extra_content;


    document.getElementById("terminal").getElementsByClassName("ace_scroller")[0].innerHTML =  current_content + extra_content;

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
var globa_extra = "";
wait_for_run_button();
//document.getElementById("d").style.height = "calc(100% - 2.5px)";


