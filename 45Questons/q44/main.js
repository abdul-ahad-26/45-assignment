"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
let order_summary = (item_array) => {
    console.log("Summary of sandwich");
    for (let item of item_array) {
        console.log(item);
    }
};
order_summary(["ketchup", "mayonese", "cucumber", "musturd"]);
order_summary(["ketchup", "mayonese", "lettuce", "musturd"]);
order_summary(["ketchup", "spanich", "cucumber", "musturd"]);
