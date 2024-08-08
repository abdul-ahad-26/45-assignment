var favouriteCar = ["tesla", "civic", "Rolls Royce", "fortuner"];
for (var i = 0; i < favouriteCar.length; i++) {
    console.log("I would like to own a ".concat(favouriteCar[i], " car"));
}
favouriteCar.forEach(function (car) {
    console.log("I would like to own a ".concat(car, " car"));
});
