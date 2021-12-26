
//check parentheses 

var isValid = function(s){

    const stack = []

    for (i=0; i < s.length; i++){

        let curChar = s[i];

        switch(curChar) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}')
                break;
            default:
                topElement = stack.pop()
                if (curChar !== topElement) return false;       
        }
    }
    return stack.length === 0;
}


//check quotations
// const inString = s => line => {
//     const has = [...line.matchAll(/'[^']*'/g)].find(x => x[0].includes(s))
//     return has || [...line.matchAll(/"[^"]*"/g)].find(x => x[0].includes(s))
//   }
//   const matcher = inString('MATCH')
//   console.log(matcher('get(1101,"MATCH",obj)'))