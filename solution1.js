/* 
STEPS:
1. Iterate the string
2. If the character is an opening bracket("(", "{", "[") -> push onto stack
3. If the character is a closing bracket (")", "}", "]") -> 
    a. check the (peek) the last element in the stack
    b. if the c(the cclosing bracket) matches the last item in the stack, pop element from stack and 
    c. if they don't match -> return false and done
4. If we make it though the entire string,
    a. stack length is 0, return true

Corner Cases
- single character -> false 
- empty -> true

Pre-Check
- if length is odd return false
*/

function validBrackets(bracketString) {
    // create JS array as stack - JS arrays share much of the same functionality as the Stack API
    const stack = [];
    // create arrays one for opening brackets, one for closing - we will compare our characters as we loop through the bracketString against these arrays
    const openingBrackets = ["(", "{", "["];
    const closingBrackets = [")", "}", "]"];

    // loop through the bracketString - the string we want to validate
    for (let i = 0; i < bracketString.length; i++) {
        //get the current character
        const currentChar = bracketString[i];
        // see if the current character is an opening bracket...
        if (openingBrackets.includes(currentChar)) {
            stack.push(currentChar);
        // if not check if there is a match
        } else if (closingBrackets.includes(currentChar)) {
            const match = openingBrackets[closingBrackets.indexOf(currentChar)];
            if(stack.length === 0 || stack.pop() !== match) {
                return false;
            }
        }
    }
    return stack.length === 0
}

const string1 = "[]";
console.log(validBrackets(string1));

const string2 = "{{[]}";
console.log(validBrackets(string2));

const string3 = "{{}}[]]";
console.log(validBrackets(string3));
