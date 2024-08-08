let make_shirt=(size:string="large",message:string="'I love Typescript'")=>{
    console.log(`Shirt size is ${size} and message to be printed is '${message}'`)
}


make_shirt();
make_shirt("medium");
make_shirt("small","I love javascript");