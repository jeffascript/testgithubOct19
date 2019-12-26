/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/


/* WRITE YOUR CODE HERE */
var a = 12;
var b = 20;
var SUM = a + b;
/* or the one below*/
var SUM=12+20;
console.log(SUM);
console.log(a+b)

/* EXERCISE 2
Create a variable named X containing the number 12
*/

/* WRITE YOUR CODE HERE */
var x = 12;

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

/* WRITE YOUR CODE HERE */
var name =  "John Doe";

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

/* WRITE YOUR CODE HERE */
var X = 12;
var difference = 12 - X;
console.log(difference);
console.log(12 - X);

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

/* WRITE YOUR CODE HERE */
var name1= "john";
var name2="John"
console.log(name1==name2);

console.log(name2.toLowerCase()==name1);


//my new way
var name1 = "john";
var name2 = "John";

if (name1==name2){
    result=" They are equal";
} else if(name1==name2.toLowerCase()){
    result="They are now the same because of a change in second name "
}

alert(result)

console.log(result);

/* EXERCISE 6
Create and array with the first 5 positive numbers
*/
/* WRITE YOUR CODE HERE */
var positiveNumberArray = [,1,2,3,4,5]
// 0 was excluded because it's neither a -/+ number// 

/* EXERCISE 7 *
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

/* WRITE YOUR CODE HERE */

//When adding a number and a string, JavaScript will treat the number as a string.

var x = [0,3,6]
    switch (x) { 
        case 0:	
         console.log(" 0 ==> Zero");
         break;
        case 3:																						console.log(" 0 ==> Three");
        break;	
        case 6:																						console.log(" 0 ==> Six"); 								
        default:
            console.log("not included or More than Ten")
}	



/* EXERCISE 8 
Insert a value in a variable based on the resut of a ternary if
*/

/* WRITE YOUR CODE HERE */


/* EXERCISE 9
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
// ( condition ) ? { return true } : { return false }
var number= 4;
var moreThanTen = "more than Ten"
var evenNumberlessThanTen = (number <= 10)
? evenNumberlessThanTen = number < 10 
: evenNumberlessThanTen = moreThanTen;
console.log(evenNumberlessThanTen);
