
exports.getInnerCode = (html_object) => {
    // This html code must contain some similar 
    // div tags that we gonna store them in a .py file later
    // therefore we need the indentation to be okay
    var i=0;
    var j=0;
    var res = [];
    var num_of_line = 0;
    var flag = 0;
    while(html_object.includes("<div")){
        i = html_object.indexOf("<div");
        j = html_object.indexOf("</div>");
        res.push(html_object.substring(i,j+6));
        html_object = html_object.substring(j);
    }
    return res;
}



