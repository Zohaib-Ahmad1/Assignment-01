//Question//
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

//Answer//
let persons: string[]=["Junaid","Faizan","Khizar"]
{
    for(let i=0; i<persons.length; i++)
    {
        console.log(persons[i]+`! You are invited for Iftar dinner at Tuscany on Saturday at 8 PM`)
    }
}