// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["charlie", "Alex", "Sam", "Bob"];
var magicians_copy = magicians;
var show_magicians = function (magicians) {
    magicians.forEach(function (name) {
        console.log(name);
    });
};
show_magicians(magicians);
var make_great = function (magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The great " + magicians[i];
    }
    return magicians;
};
make_great(magicians);
show_magicians(magicians);
var great_magicians = make_great(magicians_copy);
show_magicians(magicians_copy);
show_magicians(great_magicians);
