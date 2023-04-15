// QUestion //
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program. 

let persons: string[]=["Junaid","Faizan","Khizar"]
{
    for(let i=0; i<persons.length; i++)
    {
        console.log(persons[i]+`! You are invited for Iftar dinner at Tuscany on Saturday at 8 PM`)
    }
}
let indexErrorRemoved: string [] = ["Junaid","Faizan","Khizar","Index error is removed"]
console.log(indexErrorRemoved[3])
// here original array is up to 2nd index and it's an index error of i call for 3rd index
// and it shows "undefined" in result. When I add another name in array then it will be resolved//