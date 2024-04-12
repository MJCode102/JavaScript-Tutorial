console.log("~~Topic : Creation of Array")
let heroes = ["IronMan", "Thor", "ShaktiMan", "AntMan"]
console.log(heroes)
console.log("Length of Array 'heroes' is:" , heroes.length) // Length is property | but method() is ki kuch kaam karta hai e.g trim()
//Array Indices
console.log("~~Topic : Array Indices")
console.log(heroes[2], heroes[1]); // it will give output of which index the array is!
// to change value of array
console.log("Updating value of 1 (i.e:Thor) position to:", heroes[1]= "Papa");
console.log(heroes)

//We can replace in String characters as it is IMMUTABLE, we have to add it in new variable and get new strings

console.log("~~Topic : Looping over an Array")
console.log("\t\t*For Loop in Array*")

for(i=0 ;i<heroes.length ; i++) // i value will never be equal to array.length, it will be less the array.length
{
console.log(heroes[i]);
}
console.log("\t\t*For-of Loop in Array*") //prefer to use for-of loop
let cities = ["Mumbai", "Pune", "Gurgaon", "Delhi", "Bangalore"];

for(let city of cities){
console.log(city.toUpperCase());
}

console.log("~~Topic : Array Methods |\tPush() Method")

//Push Methods
let bikeParts =["mirror", "brakes", "Petrol", "mobile Stand", "Seat"];
let Price = [123, 245, 654, 777, 6454, 777, 3332]
console.log(`Before Push Method we had : ${bikeParts}`)
bikeParts.push("Keys", "mudGuard")
console.log(`Before Push Method we now have : ${bikeParts}`)

console.log("~~Topic : Array Methods |\tPop() Method")

//Pop Method
console.log(`Before Pop Method we had : ${bikeParts}`)
let deletedItems = bikeParts.pop();
console.log(bikeParts)
console.log(`Deleted item is '${deletedItems}' from Bike Parts list`)

//toString Method
console.log("~~Topic : Array Methods |\ttoString() Method")
console.log(`This is coversion of Array to string using toString():\nBike Parts is:
${bikeParts.toString()}\nPrice is:\n${Price.toString()}`)

//Concat Method
console.log("~~Topic : Array Methods |\t concat() Method")

let kitchenItems = ["Gas", "Utensils", "Groceries", "Scrubs"];
let hallItems = ["Sofas", "Television", "Books"];
let bedroomItems = ["Bedsheets", "Pillows", "Blankets"]

let houseItems = kitchenItems.concat(hallItems, bedroomItems);
console.log(`Your Kitchen items are: ${kitchenItems}\nHall items are:${hallItems}\nBedroom Items are:${bedroomItems}`);
console.log(`Your House Items are: ${houseItems}`);

//unShift Method
console.log("~~Topic : Array Methods |\t unShift() Method")
console.log(`Before adding any items list are ${kitchenItems}`)
kitchenItems.unshift("Sugar");
console.log(`'Sugar' items is added in start using unShift() method i.e. ${kitchenItems}`); //unshift will add to start of Array list

//Shift Method
console.log("~~Topic : Array Methods |\t Shift() Method")
console.log(`Before removing any items list are ${kitchenItems}`)
let deletedItem = kitchenItems.shift();
console.log(`After applying shift() method, it will delete from start and return i.e. [${kitchenItems}], [${deletedItem}] is deleted from Kitchen item list`);

//Slice Method
console.log("~~Topic : Array Methods |\t Slice() Method")
// it will not change the original Array list

let autoName = ["Manoj", "Priyanshu", "Yugali", "Vamshee", "Kedar"]
console.log(`[${autoName}] these are Automation Tester`)
console.log(`These are Manual and Automation Tester [${autoName.slice(0,3)}]`) // Slice method will always check from endvalue-1 of arrays list
console.log(`These are only Automation Tester [${autoName.slice(3)}]`) // Here slice method will check from the array provided

//Splice Method
console.log("~~Topic : Array Methods |\t Splice() Method")
// it will do the changes in Original array, and it does add, remove, replace
let webConsole = ["Connections", "Orchestration","Administration", "Audit trail"]
console.log(`All Web console section are\n[${webConsole}]`)

webConsole.splice(2,0,"Event Stream", "Resource Group")
console.log(`Added new section(Element) before 2nd index i.e. (2,0,'Event Stream', 'Resource Group'))\n\nNew Web Console section are:\n[${webConsole}]`)
//Since we have added start index as 2, it will added after index 2

webConsole.splice(3, 1, "Error Handling") 
console.log(`Added element at 3rd Index and delete after 3rd index element i.e (3,1,'Error Handling')\n\nNew Web Console section are:\n[${webConsole}]`)
//Since we have taken 3 as start index so it will take 3 index of array and after 3rs array how many we need delete the count i.e. 1 in this case and it will add element before 3rd index

webConsole.splice(1, 0, "Connectors")
console.log(`Added element before index 1 i.e. (1, 0, 'Connectors')\n\nNew Web Console section are:\n[${webConsole}]`)
// Here we are adding "Connectors" before index 1 

webConsole.splice(4, 1)
console.log(`Deleted element on index 4 i.e. (4,1)\n\nNew Web Console section are:\n[${webConsole}]`)
// Here we are deleting "Error Handling" at index 4 so it will search index 4, and then delete 1 which is index 4

webConsole.splice(2, 1, "Policies")
console.log(`Replaced element on index 2 i.e. (2,1,Policies')\n\nNew Web Console section are:\n[${webConsole}]`)
