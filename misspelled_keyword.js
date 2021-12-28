// kyewords in python
keywords = [ "False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except"
    ,"finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise"
    ,"return","try","while","with","yield"];

// check not defind error
function checkError(str)
{
    if(str.includes("is not defined")){
        keyword_array = str.split(" ");
        misspelled_world = keyword_array[2].slice(1,-1);
        return misspelled_world
    }
    return false;
}

function correctWorld(misspelled_world)
{
    

}

console.log(checkError("NameError: name 'prin' is not defined"))