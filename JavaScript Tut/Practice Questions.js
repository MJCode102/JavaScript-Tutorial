// //Practise
// console.log("Practise Qs1 | Get user to input a number using prompt - Enter a Number. Check number is a multiple of 5 or not");

// let nos= prompt("Enter a number:");

// if(nos%3 ===0){
//     console.log(nos, "is a multiple of 3");
// }else{
//     console.log(nos, "is not a Multiple of 3");
// }
// //Practice Qt:2
// console.log("Practise Qs2 | Write a code which can gives grade to students according to their score.");
// console.log("89-100, A");
// console.log("70-89, B");
// console.log("60-69, C");
// console.log("50-59, D");
// console.log("0-49, E");

// let score = prompt("Enter your score:");

// if(score>=89 && score <=100)
// {
//     console.log("Your grade is A as per score: ", score);
// } else if (score>=70 && score<=89){
//     console.log("Your grade is B as per score: ", score);
// } else if (score>=60 && score<=69){
//     console.log("Your grade is C as per score: ", score);
// }else if (score>=50 && score<=59){
//     console.log("Your grade is D as per score: ", score);
// }else if (score<=49 && score>=0){
//     console.log("Your grade is E as per score: ", score);
// }else{
//     console.log("Your grade is Invalid as per score: ", score);
// }

// //Practice Qt:3
// console.log("Practice Q3: Print all even nos from 0 to 100")
// //Print Even nos
// for(i=0 ; i<=10; i++){
//     if(i%2 === 0){
// console.log("Even numbers are", i); 
//     }
// }
// //Print Odd nos
// for(i=0 ; i<=10; i++){
//     if(i%2 !== 0){
// console.log("Odd numbers are", i); 
//     }
// }
// //Practice Qt:4
// console.log("Practice Q4: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enter correct value")

// let gamenos = 25;
// let promptno = prompt("Guess the game nos");
// while (promptno != gamenos){ // in prompt !== always returns in string so it will not match with !==
//     promptno= prompt("Wrong number, Enter again");
// }
// console.log("You guessed right number! Its", gamenos);

// //Practice Qt:5 
// console.log("Practice Q5 of String: Prompt the user to enter their fullname.\nGenerate a username for them based on the input.\nStart username with @, followed by thier full name and ending with the fullname lenght.\ne.g: username = 'ManojPrajapati', username should be '@ManojPrajapati123'")

// let fullName = prompt("Enter your Full Name");
// let spc = fullName.replaceAll(' ',''); // if user enter with space, this will replace or remove spaces
// let username1 = "@" + spc.toLowerCase() + spc.length; // This will add @ in start and length count at end 
// console.log(username1);

// //Practice Qt:6
// console.log("Practice Q6 of Array: For a given array with marks of student -< [85,54,67,38,93]\nFind the average of the entire class")

// let marks =[85, 97, 44, 37, 76, 60];
// let sum=0;
// for (let val of marks){
// // console.log(val);    
// // sum = sum + val; // It can also be done as this
// sum += val; // Best way is to do as += Assignment opearator
// // console.log(sum);
// }
// console.log(sum);
// let average = sum / marks.length
// console.log(`Average mark of the class is ${average}`)

// //Practice Qt:7
// console.log("Practice Q7 of Array: For a given array with prices of 5 items ->\n[250, 654, 300, 900, 50]\nAll items have an offer of 10% OFF on them.\nChange the array to store final price after applying offer.")

// let itemPrice = [250, 654, 300, 900, 50]

// // This is also a way to use for-of loop
// console.log("\t*Code using for-of loop*");
// let i=0;
// for(let val of itemPrice){
// let offer = val/10;
// i++;
// console.log(`Price after offer is ${val-offer}`)
// }

// // This is also a way to use for loop
// console.log("\t*Code using for loop*");
// let itemPrice2= [250, 654, 300, 900, 50]
// for(i=0; i<itemPrice2.length; i++){
// let offer1 = itemPrice2[i]/10;
// itemPrice2[i]-= offer1;
// }
// console.log(itemPrice2);

//Practice Qt:8
console.log("Practice Q7 of Array Method:\nCreate an array to store companies -> 'Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'\na. Remove the first company from the array\nb. Remove Uber and Add Ola in its place\nc. Add Amazon at the end")

let comp1 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(comp1)

let comp2 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log("===We can use splice() method===")
comp2.splice(0, 1)
console.log(`Removed First company 'Bloomberg' from the list using splice(): \n[${comp2}]`)

let comp3 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log("===This can also use shift()===")
comp3.shift()
console.log(`Removed First company 'Bloomberg' from the list using shift(): \n[${comp3}]`)

let comp4 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
comp4.splice(2, 1, "Ola")
console.log(`Removed 'Uber' and added 'Ola' in the list: \n[${comp4}]`)

let comp5 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log("===We can use Splice() method===")
comp5.splice(6, 0, "Amazon")
console.log(`Added new company 'Amazon' in the list at end using splice(): \n[${comp5}]`)

let comp6 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log("===We can use push() method===")
comp6.push("Amazon")
console.log(`Added new company 'Amazon' at the end of the list using push(): \n[${comp6}]`)

let comp7 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log("===We can use unshift() method===")
comp7.unshift("Amazon")
console.log(`Added new company 'Amazon' at the start of the list using unshift(): \n[${comp7}]`)