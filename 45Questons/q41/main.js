// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["charlie", "Aex", "Sam", "Bob"];
var show_magicians = function (magician) {
    magician.forEach(function (name) {
        console.log(name);
    });
};
show_magicians(magicians);
