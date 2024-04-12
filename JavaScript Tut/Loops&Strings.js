//For Loop

console.log("Topic : For loop");

for(let count = 1; count <= 5; count++){
    console.log("Loops runs");
}
//Using prompt to get nos and run
console.log("For Loop with Prompt")
let nos = prompt("Enter a nos:");
for(let count = 1; count <= nos; count++){
    console.log("Loops runs for", nos);
}
console.log("For Loop to caluclate sum of nos from 1 to 10")
 let sum = 0;
 for(i=1; i<=10;i++)
 {
    sum = sum + i;
 }
console.log("Sum of 1 to 10 is ", sum)
console.log("Loops has ended")

console.log("Topic : While loop");

let j=1;
let count2 = prompt("Enter No:");
while(j<=count2)
{
console.log("Value of j is");
j++;
}
console.log("Topic : Do-While loop");
let k=20;
do{
    console.log("I'm awesome"); // Since k value(20) is not equal to 10 so it will run atleast once
} while(k<=10);

//Example 2 of sum of number

let l = 1;
let count3 = prompt("Enter No:");

do{
    console.log("Sum of l is", l);
    l++;
} while (l<=count3);
console.log(l);

console.log("Topic : For-of loop");
let str= "ManojSP"
for(let i of str){  //iterator
    console.log(i);
}
//With prompt Name
console.log("Using For-of Loop with prompt");
let str2 = prompt("Enter any Name");
let size = 0;
for(let i of str2){  //iterator
    console.log(i);
    size++;
}
//to check the size of the string
console.log("Size of string is", size)

//For in Loop
console.log("Topic : For-in loop");

let student ={
    name: "Manoj P",
    age: 29,
    cgpa: 7.8,
    isPass: true
}
for(let key in student)
{
    // console.log("Key is", key);
    // to get key and its values
    console.log("Key is", key, "Values is", student[key]);
};
//Strings
console.log("Topic : Strings")

let str1 = "ManojSP"
console.log("String Length in ManojSP is", str1.length);

console.log("String Indices | 3 index of ManojSP is", str[3])

//Template Literal Strings in JS
//common way is

let obj ={
    item: "Shirt",
    price: 200
}

console.log("Price of", obj.item, "is", obj.price); //in simplier way
//console.log("Different to say is as Template Literal is with `` case")
let output = `Price of ${obj.item} is ${obj.price}`;
console.log(output);

//Escape Characters with \n and \t

let Str3 = "ManojSPrajapati";
let Str4 = "Manoj\nS\nPrajapati";
let Str5 = "Manoj\tS\tPrajapati";
console.log("Simple Way |", Str3);
console.log("To print in next line |", Str4);
console.log("To print in next tab space | ",Str5);

//Strings Methods
console.log("Topic : Strings Methods");

let str6 = "IamAwesomeProgrammer"
console.log(str6)
console.log("This will convert in UpperCase:",str6.toUpperCase())
console.log("This will convert in LowerCase:",str6.toLowerCase())
let str7 = "   baskyabhai     "
console.log("This will print with trim the whitespace from start and end:\n",str7);
console.log("If we trim the string:",str7.trim())
console.log("It will Slice a string from 1 to 5 of --IamAwesomeProgrammer--",str6.slice(1, 5));
//In slice it will not print last last end charater i.e 5 it will only give 1, 2, 3, 4 strings characters
console.log("This will concat two string str6+str7:\n",str6.concat(str7));
console.log("This will replace string charcters of IamAwesomeProgrammer:",str6.replace("Awesome", "Sexy"));
console.log("This will replace-all same string charcters 'me' of IamAwesomeProgrammer:",str6.replaceAll("me", "xz"));
console.log("It will find on which index(eg:4) the character is in'IamAwesomeProgrammer':",str6.charAt(4)) //w







