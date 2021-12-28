// kyewords in python
keywords = [ "False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except"
    ,"finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise"
    ,"return","try","while","with","yield" , "print"];

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


// return the number of difference between missplelled_world and keyword
function getDifference(a, b)
{
    var i = 0;
    var j = 0;
    var result = 0;

    while (j < b.length)
    {
        if (a[i] != b[j] || i == a.length)
            result++;
        else
            i++;
        j++;
    }
    return result;
}


// fine most simillar keyword to misspelled_world
function correctWorld(error)
{
    var misspelled_world = checkError(error);
    if(misspelled_world){
        var result = [];
        for (let i=0 ; i <36 ; i++){
            if(getDifference(keywords[i],misspelled_world) <2 ){
                result.push(keywords[i])
            }
        }
        return result
    }
    else{
        return false;
    }
    


}

// console.log(getDifference("hello", "heilu"));
// console.log("-----------------------------------------------")
// console.log(checkError("NameError: name 'prin' is not defined"))
// console.log("-----------------------------------------------")
// console.log(correctWorld("impo"))
console.log(correctWorld("NameError: name 'pri' is not defined"))