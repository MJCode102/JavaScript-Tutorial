// Putting double slash gives a single line comment

/* It gives a multiple lines comment, and it starts with '/*' and ends with '*/

//We are learning Arithmetic operator
console.log("Arithmetic Operator");
let a = 12;
let b = 4;

console.log("a + b =", a + b);

// OR

let c = 2;
let d = 4;
let x = c + d;
console.log("c + d =",x);
// same will work for -, *, / logic remains same

let e = 11;
let f = 4;

console.log("e =", e, " & f =", f);
console.log("e + f =", e + f);
console.log("e - f =", e - f);
console.log("e * f =", e * f);
console.log("e / f =", e / f);

// Other Arithmetic Operator are Modulus
console.log("Arithmetic Operator using Modulus");
console.log("Modulus of e % f =", e % f);

// Other Arithmetic Operator are Exponentiation

console.log("Arithmetic Operator using Exponentiation");
console.log("Exponentiation of e ** f =", e ** f); // It means it should give as 11^4 = 14641 (11*11*11*11)

// Unary Operator: there are two Increment (++) , Decrement (--)
//Increment
console.log("Unary Operator of Increment");
let g = 9;
console.log("g =", g);
g = g + 1;
console.log("g =", g);

// In Unary Increment , we code as

g++;
console.log("Unary increment of g =", g); // Since g value on line 44 is 10 so it will be as (10+1)

//Decrement
console.log("Unary Operator of Decrement");
let h = 7;
console.log("h =", h);
h = h - 1;
console.log("h =", h);

// In Unary Decrement , we code as

h--;
console.log("Unary decrement of h =", h); // Since h value on line 55 is 6 so it will be as (6-1)

//Two thing are in Unary , Post Inc & Pre Inc | Post Dec & Pre Dec
//Post Increment
console.log("Unary Operator Post Increment");
let i = 6;

console.log("i =", i);
console.log("Post Increment of i++ =" ,i++);  //6 Here in Post it will do the expression but doent show in console
console.log("Current i =" ,i );  //7 Here it shows the exact value

//Same will work for Post decrement
//Since now our i value is 7, So

console.log("Unary Operator Post Decrement");
console.log("i =", i);

console.log("Post Decrement of i-- =" ,i--);  //7 Here in Post it will do the expression but doent show in console
console.log("Current i =" ,i );  //6 Here it shows the exact value


//Pre Inc 
console.log("Unary Operator of Pre-Increment");
let j = 8;

console.log("j =", j);

console.log("Pre Increment of ++j =" ,++j);  //9 But in Pre it will do the expression and shows in console
console.log("Current j =" ,j );  //9

//Same will work for Pre decrement
//Since now our j value is 9, So
console.log("Unary Operator of Pre-Decrement");
console.log("j =", j);

console.log("Pre Decrement of --j =" ,--j);  //7 Here in Post it will do the expression but doent show in console
console.log("Current j =" ,j );  //6 Here it shows the exact value

//Assignment Operator (= , +=, -=, %=, **=)
//= is common in user where a=b so in this right value is equal to right 
console.log("Assignment Operator using =");
k = 3;
k += 4; // k = k + 4 (7)
console.log("+= value of k is ", k); // O/P is 7

// same for -=
console.log("Assignment Operator using -=");
console.log("Current value of k is ", k); // 7
k -= 2; // k = k - 2 (5)
console.log("-= value of k is ", k);

// same for /=
console.log("Assignment Operator using /=");
console.log("Current value of k is ", k); // 5
k /= 3; // k = k / 3 (1.6)
console.log("/= value of k is ", k);

// same for *=
console.log("Assignment Operator using *=");
console.log("Current value of k is ", k); // 1.6
k *= 2; // k = k * 2 (3.3)
console.log("*= value of k is ", k);

// same for %=
console.log("Assignment Operator using %=");
console.log("Current value of k is ", k); // 3.3
k %= 2; // k = k % 2 (1.3)
console.log("%= value of k is ", k);

// same for **=
console.log("Assignment Operator using **=");
console.log("Current value of k is ", k); // 1.3
k **= 5; // k = k ** 5 (4.2)
console.log("**= value of k is ", k);

//Comparison Operator with (==, !=, ===, !==)
console.log("Comparison Operator");
l = 10;
m = 23;
//Equal to | Operator ==
console.log("Comparison Operator for Equal to | Operator ==");
console.log("Is l equal to m? 10==23", l==m);
//Not Equal to | Operator !=
console.log("Comparison Operator for Not Equal to | Operator !=");
console.log("Is l not equal to m? 10!=23", l!=m);
//Equal to and data type | Operator ===
console.log("Comparison Operator for Equal to and data type | Operator ===");
console.log("Is l equal to m with datatype? 10===23", l===m);
//Not Equal to and data type | Operator !==
console.log("Comparison Operator for Not Equal to and data type | Operator !==");
console.log("Is l not equal to m with datatype? 10!==23", l!==m);

//Comparison Operator with (>, >=, <, <=)
//Greater to | Operator >
console.log("Comparison Operator for Greater to | Operator >");
console.log("Is l greater than m? 10>23", l>m);
//Greater Equal to | Operator >=
console.log("Comparison Operator for Greater Equal to | Operator >=");
console.log("Is l greater equal to m? 10>=23", l>=m);
//Lesser than | Operator <
console.log("Is l lesser than m? 10<23", l<m);
console.log("Comparison Operator for Lesser than | Operator <");
//lesser Equal to| Operator !==
console.log("Is l lesser equal to m? 10<=23", l<=m);
console.log("Comparison Operator for lesser Equal to| Operator !==");

//Logical Operator
console.log("Logical Operator");
n = 43;
o = 34;
// AND (&&) Operator
console.log("Logical Operator | AND (&&) Operator");
let cont1 = n>o
let cont2 = n===43
console.log("AND Operator for cont1 && cont2 :", cont1 && cont2); // T and T = T
//Other ways to code
console.log("Other way to get cont1 && cont2 by removing extra variables :", n>o && n===43); //T and T = T

//OR (||) operator
console.log("Logical Operator | OR (||) operator");
console.log("OR Operator for cont1 || cont2 :", n<o || n===43); // F OR T = T

//Not (!) operator
console.log("Logical Operator | Not (!) operator");
console.log("!(43>34) :", !(n>o)); // F, ! will do opposite of expectation
console.log("!(43<34) :", !(n<o)); // T, ! will do opposite of expectation
// If we dont add not
console.log("Logical Operator | What If we dont add not 43<34");
console.log("Same condition but no NOT operator : 43<34 :", n<o); // F, ! will do opposite of expectation
console.log("!(43==34) :", !(n==o)); // T, ! will do opposite of expectation

//Conditional Statements
console.log("Conditional Statements");
//IF statement
console.log("Conditional Statements | IF statement");
console.log("IF Statement");
let age=29
if(age >=18)
{
console.log("Yes you can VOTE");
}
let age2=16
if(age2 <18)
{
console.log("Yes you CANNOT VOTE");
}
//Example 2
console.log("IF Statement : Example 2");
let mode= "Dark";
let color;
if(mode === "Dark")
{
color="Black";
}
if(mode ==="Light")
{
color="White";
}
console.log(color);

//if-else Statement
console.log("Conditional Statements | if-else Statement");
console.log("IF else Statement");
let mode2= "Light";
let color2;
if(mode2 === "Dark") // It will check if mode2 is Dark else it will take White inspect of mode2 value condition
{
    color2="Black";
}
else
{
    color2="White";
}
console.log(color2);

//Example with Odd and Even numbers
console.log("IF else with with Odd and Even Numbers");
num= 111;
if(num%2 ===0){
    console.log(num ,"is Even");
}else{
    console.log(num, "is Odd");
}
// Else-If Statement
console.log("Conditional Statements | Else-If Statement");
console.log("Else-IF Statement");
let mode3= "Blue";
let color3;

if(mode3==="Light")
{
    color3 = "White";
} else if(mode3 ==="Blue")
{
    color3 = "Blue";
} else if(mode3 ==="Pink")
{
    color3 = "Pink";
}else {
    color3 = "No color";
}
console.log(color3);

//Single if statement if No condiditon is required
console.log("If we dont have any condition to check still we want to print mode value using if statement");
if(mode3 === "Blue") console.log(mode3); // But this is not a right way as profession
// we shud always code in {} blocks
console.log("But professionally we shud always code in Blocks {}");
if(mode3 === "Blue") 
{
    console.log(mode3)
}

//Ternary Operator

console.log("Ternary Operator");

let age3 = 2;

let result = age3 >= 18 ? "Adult" : "Not an Adult"; // this simpler or Compact if-else
console.log(result);

//Pratice question is in practice.js