// Question //
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
let place = 'New orlands';
console.log("Is Place == 'New orlands'? I predict True.")
console.log(place == 'New orlands')
let anotherPlace = 'New orlands';
console.log("Is Place != 'New orlands'? I predict Flase.")
console.log(place != 'New orlands')

//• Tests using the lower case function
let second= 'HELLO ZOHAIB'
console.log("Is Lower case == 'HELLO ZOHAIB'? I predict is False");
console.log (second.toLowerCase() == 'HELLO ZOHAIB');

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is 3<2? I predict False");
console.log(3<2);
console.log("Is 3>2? I predict True");
console.log(3>2);
console.log("Is 4 != 4? I predict False");
console.log(4 != 4);
console.log("Is 4 == 4? I predict True");
console.log(4 == 4);
console.log("Is 5<=9? I predict True");
console.log(5<=9);
console.log("Is 5>=9? I predict False");
console.log(5>=9);

//• Tests using "and" and "or" operators
console.log("Is 4>9 || 4==4? I predict True");
console.log(4<9);
console.log("Is 4<9 && 4!=4? I predict False");
console.log(4!=4);

//• Test whether an item is in a array
let array= ["PIAIC", "Zohaib", "USA", "Britin"];
console.log("Is array == Zohaib? I predict True");
console.log(array.includes("Zohaib"))

//• Test whether an item is not in a array
let array2= ["PIAIC", "Zohaib", "USA", "Britin"]
console.log("Is array2 == Junaid? I predict False");
console.log(array.includes("Junaid"))