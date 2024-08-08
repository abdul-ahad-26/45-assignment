let current_users:string[]=["Ahmed", "ali", "Usman", "Hayy", "hadi"];

let new_users:string[]=["Musab", "Ubaid", "Rizwan", "Ali", "Hadi"];


new_users.forEach((new_user)=>{
    if(current_users.includes(new_user.toLowerCase())){
    console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    }
    else{
        console.log(`The username ${new_user} is available`);
    }
})