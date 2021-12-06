const fsLibrary  = require('fs')
  
// Data which will need to add in a file.
let data = "Hello world."
  
// Write data in 'newfile.txt' .
fsLibrary.writeFile('code.py', data, (error) => {
      
    // In case of a error throw err exception.
    if (error) throw err;
})