// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

let store_car=(manufacturer:string,model:string,color?:string,variant?:number)=>{
    let car={
        "manufacturer":manufacturer,
        "model":model,
        "color":color,
        "variant":variant
    }
    return car;
}

let car1=store_car("Honda","city","silver");

console.log(car1.manufacturer,car1.model,car1.color);