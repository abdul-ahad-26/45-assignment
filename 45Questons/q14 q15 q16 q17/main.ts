let guestList:string[]=["Shayan","Arqam","Ali Murad"];

guestList.forEach((guest)=>{console.log(`${guest} You are invited at the dinner`);})

//q15.shayan is not coming
console.log("\nShayan can't make it");
guestList.splice(0,1,"shakoor");
guestList.forEach((guest)=>{console.log(`${guest} You are invited at the dinner`);});

//q16. I have found a new table
console.log("I have found a new table");
guestList.unshift("Abdullah");
guestList.splice(2,0,"Ali kazmi");
guestList.push("zaid");
guestList.forEach((guest)=>{console.log(`${guest} You are invited at the dinner`);});
console.log(guestList);
//q17. I can invite only two people for dinner.
console.log("I can invite only two people for dinner.");
// let dropped=;
console.log(`${guestList.pop()}, I am  sorry I can't invite you to dinner.`);
console.log(`${guestList.pop()}, I am  sorry I can't invite you to dinner.`);
console.log(`${guestList.pop()}, I am  sorry I can't invite you to dinner.`);
console.log(`${guestList.pop()}, I am  sorry I can't invite you to dinner.`);


guestList.forEach((guest)=>{console.log(`${guest} You are still invited`);});
guestList.splice(0,2);
guestList.forEach((guest)=>{console.log(`${guest} You are still invited`);});









