

const {getInnerCode} = require('./util');

test('should split data code', ()=>{
    var expected_input = `<div>print("hello world")</div>`;
    var expected_output = [`<div>print("hello world")</div>`];
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});
/*
test('should', ()=>{
    var expected_input = `<div>def sum(a, b):</div>
    <div>    return (a + b)</div>
    <div>       </div>
    <div>a = int(input('Enter 1st number: '))</div>
    <div>b = int(input('Enter 1st number: '))</div>
    `;
    var expected_output = [`<div>def sum(a, b):</div>`,
    `<div>    return (a + b)</div>`,
    `<div>       </div>`,
    `<div>a = int(input('Enter 1st number: '))</div>`,
    `<div>b = int(input('Enter 1st number: '))</div>`];
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});

test('should', ()=>{
    var expected_input = `<div>print(f'Sum of {a} and {b} is {sum(a, b)}')</div>`;
    var expected_output = [`<div>print(f'Sum of {a} and {b} is {sum(a, b)}')</div>`];
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});

test('should', ()=>{
    var expected_input = `<div># Online Python - IDE, Editor, Compiler, Interpreter</div>`;
    var expected_output = [`<div></div>`];
    const text = getInnerCode(expected_input);
    expect(text).toStrictEqual(expected_output);
});
*/