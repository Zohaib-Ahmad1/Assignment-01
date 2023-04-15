// Question //
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified. 

let magician=["Harry Houdini", "Samri jadugar", "Dynamo", "David Blaine"]
let make_great =()=>
{
    for (let i=0; i<magician.length; i++)
    {
        console.log(`The Great ${magician[i]}`)
    }
}
make_great();
let show_magicians = make_great= () =>
{
    console.log(magician)
}
show_magicians();