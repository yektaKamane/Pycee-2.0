
//check parentheses `{` , `[` , `(` 

function areBracketsBalanced(expr)
{
    let stack = [];
 
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }

        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    return (stack.length == 0);    // if stack is empty the code is Balanced
}

var str = `def sum(a, b):
return (a + b)

a = int(input('Enter 1st number: '))
b = int(input('Enter 2nd number: '))

print(f'Sum of {a} and {b} is {sum(a, b)}')`;

var str2 = `def sum(a, b):
return (a + b)

a = int(input('Enter 1st number: '))
b = int(input('Enter 2nd number: '))

print(f'Sum of {a} and {b} is {sum(a, b}')
`;

var str3 = `def sum(a, b):
return (a + b)

a = int(input('Enter 1st number: '))
b = int(input(('Enter 2nd number: '))

print(f'Sum of {a} and {b} is {sum(a, b}')`;

var str4 = `// Java program for
// the above approach
import java.io.*;

class GFG{

static void sub_mat_even(int N)
{
	
	// Counter to initialize
	// the values in 2-D array
	int K = 1;

	// To create a 2-D array
	// from to 1 to N*2
	int[][] A = new int[N][N];

	for(int i = 0; i < N; i++)
	{
		for(int j = 0; j < N; j++)
		{
			A[i][j] = K;
			K++;
		}
	}

	// If found even we reverse
	// the alternate row elements
	// to get all diagonal elements
	// as all even or all odd
	if (N % 2 == 0)
	{
		for(int i = 0; i < N; i++)
		{
			if (i % 2 == 1)
			{
				int s = 0;
				int l = N - 1;

				// Reverse the row
				while (s < l)
				{
					swap(A[i], s, l);
					s++;
					l--;
				}
			}
		}
	}

	// Print the formed array
	for(int i = 0; i < N; i++)
	{
		for(int j = 0; j < N; j++)
		{
			System.out.print(A[i][j] + " ");
		}
		System.out.println();
	}
}

private static void swap(int[] A, int s, int l)
{
	int temp = A[s];
	A[s] = A[l];
	A[l] = temp;
}

// Driver code
public static void main(String[] args)
{
	int N = 4;

	// Function call
	sub_mat_even(N);

}

// This code is contributed by jithin
`;

var str5 = `# Python3 program for
# the above approach
import itertools


def sub_mat_even(n):
	
	temp = itertools.count(1)
	
	# create a 2d array ranging
	# from 1 to n^2
	l = [[next(temp)for i in range(n)]for i in range(n)]
	
	# If found even we reverse the alternate
	# row elements to get all diagonal elements
	# as all even or all odd
	if n%2 == 0:
		for i in range(0,len(l)):
			if i%2 == 1:
				l[i][:] = l[i][::-1]
	
	# Printing the array formed
	for i in range(n):
		for j in range(n):
			print(l[i][j],end=" ")
		print()

n = 4
sub_mat_even(n)
`;

console.log("first str  "+areBracketsBalanced(str))
console.log("second str  "+areBracketsBalanced(str2))
console.log("third  "+areBracketsBalanced(str3))
console.log("four  "+areBracketsBalanced(str4))
console.log("five  "+areBracketsBalanced(str5))

//check quotations
// const inString = s => line => {
//     const has = [...line.matchAll(/'[^']*'/g)].find(x => x[0].includes(s))
//     return has || [...line.matchAll(/"[^"]*"/g)].find(x => x[0].includes(s))
//   }
//   const matcher = inString('MATCH')
//   console.log(matcher('get(1101,"MATCH",obj)'))