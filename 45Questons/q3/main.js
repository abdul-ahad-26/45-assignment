var personName = "abdul ahad";
console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
console.log("Titlecase: " + personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
