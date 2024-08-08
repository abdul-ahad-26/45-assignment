let order_summary=(item_array:string[])=>{
    console.log("Summary of sandwich");
    for(let item of item_array){
        console.log(item);
    }

}
order_summary(["ketchup","mayonese","cucumber","musturd"]);
order_summary(["ketchup","mayonese","lettuce","musturd"]);
order_summary(["ketchup","spanich","cucumber","musturd"]);


