// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames:string[] = ["Admin", "Ahmed", "Hamzah", "Omer", "Shayan"];

usernames.forEach((val)=>{
    if(val==="Admin"){
        console.log(`Hello ${val}, would you like to see a status report?` );
    }else{
        console.log(`Hello ${val}, thank you for logging in again.`)
    }
})

if(usernames.length > 0 ){
    usernames.forEach((val)=>{
        console.log(`Welcome back ${val}`)
    })
}
else{
console.log("we need to find some user");
}

usernames=[];

if(usernames.length === 0){
console.log("we need to find some user");
}