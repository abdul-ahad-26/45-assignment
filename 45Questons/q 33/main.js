var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (val) {
    if (val === 1) {
        console.log("".concat(val, "st"));
    }
    else if (val === 2) {
        console.log("".concat(val, "nd"));
    }
    else if (val === 3) {
        console.log("".concat(val, "rd"));
    }
    else {
        console.log("".concat(val, "th"));
    }
});
