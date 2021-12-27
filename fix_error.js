// method checks if character is parenthesis(open or closed)

var result;

function isParenthesis(c)
{
    return ((c == '(') || (c == ')'));
}
 
function isValidString(str)
{
    let cnt = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] == '(')
            cnt++;
        else if (str[i] == ')')
            cnt--;
        if (cnt < 0)
            return false;
    }
    return (cnt == 0);
}
 
// method to remove invalid parenthesis
function removeInvalidParenthesis(str)
{
    if (str.length==0)
        return;
   
    let visit = new Set();
   
    let q = [];
    let temp;
    let level = false;
   
    q.push(str);
    visit.add(str);
    while (q.length!=0)
    {
        str = q.shift();
        if (isValidString(str))
        {
            
            console.log(str)
            console.log("-----------------------------------")
   
            level = true;
        }
        if (level)
            continue;
        for (let i = 0; i < str.length; i++)
        {
            if (!isParenthesis(str[i]))
                continue;
   

            temp = str.substring(0, i) + str.substring(i + 1);
            if (!visit.has(temp))
            {
                q.push(temp);
                visit.add(temp);
            }
        }
    }
}

var str = `def sum(a, b):
return (a + b)

a = int(input('Enter 1st number: '))
b = int(input('Enter 2nd number: '))

print((f'Sum of {a} and {b} is {sum(a, b)}')`;

// var str2 = "";
removeInvalidParenthesis(str)
// console.log(result)