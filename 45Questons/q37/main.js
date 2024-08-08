var make_shirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "'I love Typescript'"; }
    console.log("Shirt size is ".concat(size, " and message to be printed is ").concat(message));
};
make_shirt();
make_shirt("medium");
make_shirt("small", "I love javascript");
