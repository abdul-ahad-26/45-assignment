var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Instanbul", "New York", "Sydney", "Islamabad", "Dubai"];
console.log("Orignal Order: ", placesToVisit);
console.log("Alphabetical order: ", __spreadArray([], placesToVisit, true).sort());
console.log("Still in Orignal Order: ", placesToVisit);
console.log("Reverse Order: ", __spreadArray([], placesToVisit, true).reverse());
console.log("Still in Orignal Order: ", placesToVisit);
console.log("Orignal Array Reversed: ", placesToVisit.reverse());
console.log("Back to Orignal Order: ", placesToVisit.reverse());
console.log("Sorted in Alphabetic Order: ", placesToVisit.sort());
console.log("Orignal Array Reversed Again: ", placesToVisit.reverse());
