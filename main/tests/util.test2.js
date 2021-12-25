

const {getInnerCode} = require('./util');

test('should turn solution array to html tags', ()=>{
    var expected_input = [`The "SyntaxError: unexpected EOF while parsing"`, "new test"];
    var expected_output = 
    '<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">'
        + `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` 
            + `<p style="margin-left: 15px; "> Pycee found ` + 2 + " solutions </p>" 
        + '</div>'

        + `<div id="pycee-solutions" style="margin: 0 10px;">`
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 1 + ": </p>"
                                            // here sits the solution
            + `<p style="margin: 0 10px;">` + `The "SyntaxError: unexpected EOF while parsing"` + "</p>"
            + '<br>' 
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 2 + ": </p>"
            // here sits the solution
            + `<p style="margin: 0 10px;">` + `new test` + "</p>"
            + '<br>'
        + "</div>"
 
    + '</div>';
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});
//mitra did something
test('should turn solution array to html tags', ()=>{
    var expected_input = [`The "SyntaxError: unexpected EOF while parsing"`, "new test"];
    var expected_output = 
    '<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">'
        + `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` 
            + `<p style="margin-left: 15px; "> Pycee found ` + 2 + " solutions </p>" 
        + '</div>'

        + `<div id="pycee-solutions" style="margin: 0 10px;">`
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 1 + ": </p>"
                                            // here sits the solution
            + `<p style="margin: 0 10px;">` + `The "SyntaxError: unexpected EOF while parsing"` + "</p>"
            + '<br>' 
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 2 + ": </p>"
            // here sits the solution
            + `<p style="margin: 0 10px;">` + `new test` + "</p>"
            + '<br>'
        + "</div>"
 
    + '</div>';
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});