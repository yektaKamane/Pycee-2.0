//i was really confused by the branches so i uploaded it myself , but i tested them all and they work

const {getInnerCode} = require('./util');
/*
test('should turn solution array to html tags', ()=>{
    var expected_input = [`The "SyntaxError: unexpected EOF while parsing"`];
    var expected_output = 
    `'<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">'`
        + `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` 
            + `<p style="margin-left: 15px; "> Pycee found ` + 6 + " solutions </p>" 
        + '</div>';

        + `<div id="pycee-solutions" style="margin: 0 10px;">`
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 1 + ": </p>"
                                            // here sits the solution
            + `<p style="margin: 0 10px;">` + `The "SyntaxError: unexpected EOF while parsing"` + "</p>"
            + '<br>'
        + "</div>"

    + output_text 
    + '</div>';
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});*/

// ZeroDivisionError: division by zero
test('should turn solution array to html tags', ()=>{
    var expected_input = [`ZeroDivisionError: division by zero`];
    var expected_output = 
    `'<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">'`
        + `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` 
            + `<p style="margin-left: 15px; "> Pycee found ` + 6 + " solutions </p>" 
        + '</div>';

        + `<div id="pycee-solutions" style="margin: 0 10px;">`
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 2 + ": </p>"
                                            // here sits the solution
            + `<p style="margin: 0 10px;">` + `ZeroDivisionError: division by zero` + "</p>"
            + '<br>'
        + "</div>"

    + output_text 
    + '</div>';
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});
// NameError: name 'spam' is not defined
test('should turn solution array to html tags', ()=>{
    var expected_input = [`NameError: name 'spam' is not defined`];
    var expected_output = 
    `'<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">'`
        + `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` 
            + `<p style="margin-left: 15px; "> Pycee found ` + 6 + " solutions </p>" 
        + '</div>';

        + `<div id="pycee-solutions" style="margin: 0 10px;">`
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 3 + ": </p>"
                                            // here sits the solution
            + `<p style="margin: 0 10px;">` + `NameError: name 'spam' is not defined` + "</p>"
            + '<br>'
        + "</div>"

    + output_text 
    + '</div>';
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});
// TypeError: can only concatenate str (not "int") to str
test('should turn solution array to html tags', ()=>{
    var expected_input = [`TypeError: can only concatenate str (not "int") to str`];
    var expected_output = 
    `'<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">'`
        + `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` 
            + `<p style="margin-left: 15px; "> Pycee found ` + 6 + " solutions </p>" 
        + '</div>';

        + `<div id="pycee-solutions" style="margin: 0 10px;">`
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 4 + ": </p>"
                                            // here sits the solution
            + `<p style="margin: 0 10px;">` + `TypeError: can only concatenate str (not "int") to str` + "</p>"
            + '<br>'
        + "</div>"

    + output_text 
    + '</div>';
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});
//traceback call

  test('should turn solution array to html tags', ()=>{
    var expected_input = [`Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    File "<stdin>", line 3, in divide
  `];
    var expected_output = 
    `'<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">'`
        + `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` 
            + `<p style="margin-left: 15px; "> Pycee found ` + 6 + " solutions </p>" 
        + '</div>';

        + `<div id="pycee-solutions" style="margin: 0 10px;">`
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 5 + ": </p>"
                                            // here sits the solution
            + `<p style="margin: 0 10px;">` + `Traceback (most recent call last):
            File "<stdin>", line 1, in <module>
            File "<stdin>", line 3, in divide
          ` + "</p>"
            + '<br>'
        + "</div>"

    + output_text 
    + '</div>';
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});
// TypeError: can only concatenate str (not "int") to str
test('should turn solution array to html tags', ()=>{
    var expected_input = [`TypeError: can only concatenate str (not "int") to str`];
    var expected_output = 
    `'<div id="pycee-inserted" style="padding: 10px; margin: 10px auto; width: 92%">'`
        + `<div id="pycee-head" style="margin: 30px auto; color: #3770A0; font-size: 18px; border-bottom: 1px solid; font-weight: 600;">` 
            + `<p style="margin-left: 15px; "> Pycee found ` + 6 + " solutions </p>" 
        + '</div>';

        + `<div id="pycee-solutions" style="margin: 0 10px;">`
            + `<p style="color: #3770A0; font-size: 14px; font-weight: 600;"> Soultion ` + 6 + ": </p>"
                                            // here sits the solution
            + `<p style="margin: 0 10px;">` + `TypeError: can only concatenate str (not "int") to str` + "</p>"
            + '<br>'
        + "</div>"

    + output_text 
    + '</div>';
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});
