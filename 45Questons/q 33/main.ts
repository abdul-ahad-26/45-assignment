let numbers:number[]=[1,2,3,4,5,6,7,8,9]


numbers.forEach((val)=>{
    if(val===1){
        console.log(`${val}st`);
    }else if(val===2){
        console.log(`${val}nd`);
    }else if(val===3){
        console.log(`${val}rd`);
    }else{
        console.log(`${val}th`);
    }
})