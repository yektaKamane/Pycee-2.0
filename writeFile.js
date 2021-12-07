// import DataTables from './fs-main/src/libuv-1.38.1/src/win/pipe.c'
const fsLibrary  = require('fs')
 
let data = "def sum(a, b):    return (a + b)a = int(input('Enter 1st number: '))b = int(input('Enter 2nd number: '))print(f'Sum of {a} and {b} is {sum(a, b)}')";
  
fsLibrary.writeFile('code.py', data, (error) => {
    
    if (error) throw err;
})


// function WriteFile()
// {
// var FileOpener = new window.ActiveXObject("Scripting.FileSystemObject");
// var FilePointer = FileOpener.OpenTextFile("D:\sample\text.txt", 8, true);
// FilePointer.WriteLine(`print("hello")`);
// FilePointer.Close();
// }

// var textFile = null,
// makeTextFile = function (text) {
// var data = new Blob([text], {type: 'text/plain'});

// if (textFile !== null) {
//     window.URL.revokeObjectURL(textFile);
// }
// textFile = window.URL.createObjectURL(data);
// return textFile;
// };