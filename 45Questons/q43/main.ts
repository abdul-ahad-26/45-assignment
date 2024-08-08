let magicians:string[]=["charlie", "Alex", "Sam", "Bob"];

function show_magicians(magicians:string[]){
    for(let magician of magicians){
        console.log(magician);
    }
}


function make_great(magicians:string[]){
for(let i = 0; i< magicians.length; i++){
    magicians[i]="The great " + magicians[i];
}
}

function make_great_copy(magicians:string[]){
    let greatMagicians:string[]=[];
for(let i=0;i<magicians.length;i++){
greatMagicians[i]="The great " + magicians[i] 
}
    return greatMagicians;
}

let greatMagicians = make_great_copy(magicians)

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);


