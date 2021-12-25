
exports.getInnerCode = (solutions) => {
    // This html code must contain some similar 
    // div tags that we gonna store them in a .py file later
    // therefore we need the indentation to be okay
    var i = 0;
    var output_text = ``;
    var pycee_head = 
    `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` + 
    `<p style="margin-left: 15px; "> Pycee found ` + solutions.length + " solutions </p>" + '</div>';

    output_text += pycee_head;
    
    var solutions_text = `<div id="pycee-solutions" style="margin: 0 10px;">`;
    for (i=0; i<solutions.length; i++){
        solutions_text += `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + (i+1) + ": </p>";
        solutions_text += `<p style="margin: 0 10px;">` + solutions[i] + "</p>";
        solutions_text += '<br>'
    }
    solutions_text += '</div>';

    output_text += solutions_text;
    output_text = '<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">' + output_text + '</div>';
    return output_text;
}



