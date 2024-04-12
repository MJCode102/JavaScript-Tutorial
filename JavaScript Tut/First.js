// This is to get basic info on console log
console.log("Aur Bhaisaab, kya haal chaal!!");

// creating const object collection as Non-Primitive Object
const Product = {
username: "@mannoj_007",
followers: 243,
following: 244,
isFollow: true,
};

console.log(Product);
// there are two ways to get the keys as below

console.log(Product.username);
console.log(Product ["username"]);

// To get the datatypes of key
console.log(typeof Product["isFollow"]);