//Define values
let car = 'subaru';
let vegetables:string[]=["Potato","Onion","Tomato"];
let USD:number = 278;
let PKR:number = 1;

//Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

console.log("Is car != 'subaru'? I predict False.")

console.log(car != 'subaru')


//Tests using the lower case function
console.log("Is car.lowercase() == 'subaru'? I predict True.")

console.log(car.toLowerCase() == 'subaru')

console.log("Is car.lowercase() == 'subaRu'? I predict False.")

console.log(car.toLowerCase() == 'subaRu');

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to


console.log("USD == PKR? I predict False.")

console.log(USD == PKR);

console.log("USD == 278? I predict True.")

console.log(USD == 278);

console.log("USD != PKR? I predict True.")

console.log(USD != PKR);

console.log("USD != 278? I predict False.")

console.log(USD != 278);

console.log("USD > PKR? I predict True.")

console.log(USD > PKR);

console.log("USD > 279? I predict False.")

console.log(USD > 279);

console.log("USD < 279? I predict True.")

console.log(USD < 279);

console.log("USD < 278? I predict False.")

console.log(USD < 278);


console.log("USD <= 278? I predict True.")

console.log(USD <= 278);

console.log("USD <= 276? I predict False.")

console.log(USD <= 276);

console.log("USD >= 278? I predict True.")

console.log(USD >= 278);

console.log("USD >= 279? I predict False.")

console.log(USD >= 279);


//Tests using "and" and "or" operators
console.log("USD > PKR && PKR < USD? I predict True.")

console.log(USD > PKR && PKR < USD);

console.log("USD > PKR && PKR == USD? I predict False.")

console.log(USD > PKR && PKR == USD);

console.log("USD > PKR || PKR == USD? I predict True.")

console.log(USD > PKR || PKR == USD);

console.log("USD < PKR || PKR == USD? I predict False.")

console.log(USD < PKR && PKR == USD);

//Test whether an item is in a array

console.log("Is Potato is include in vegetables array");
console.log(vegetables.includes("Potato"));


console.log("Is Potato not include in vegetables array");
console.log(!vegetables.includes("Potato"));


