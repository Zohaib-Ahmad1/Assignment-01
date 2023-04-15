// QUestion //
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged. 
// return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. 
let magician=["Harry Houdini", "Samri jadugar", "Dynamo", "David Blaine"]
let show_magicians =  () =>
{
    console.log ("Original Name List: ")
    for (let i=0; i<magician.length; i++)
    {
        console.log(magician[i])
    }
    console.log("\n")
}
let make_great =()=>
{
    console.log("Updates Name List: ")
    let newList=[];
    for (let i=0; i<magician.length; i++)
    {
        newList.push(`The Great ${magician[i]}`)
    }
    console.log(magician)
    console.log(newList)
}
show_magicians();
make_great();