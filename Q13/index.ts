//Questions//
//You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.

//Answer//
let persons: string[]=["Junaid","Faizan","Khizar","Hamad","Jamshaid","Ahsan"]
{
    for(let i=0; i<persons.length; i++)
    {
        console.log(persons[i]+`! You are invited at Tuscane for Iftar dinner at 8 PM.`)
    }
    console.log(`Unfortunatilly! ${persons[3]} is not joining us for some family emergency.`)
}

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.//
let updatedPersons: string[]=["Junaid","Faizan","Khizar","Hamad","Jamshaid","Ahsan"]
{
    updatedPersons.splice(3,1,"Hanzala")
    for(let i=0; i<updatedPersons.length; i++)
    {
        console.log(updatedPersons[i]+`! You are invited at Tuscane for Iftar dinner at 8 PM.`)
    }
}

//Print a second set of invitation messages, one for each person who is still in your list.
let updatedPerson: string[]=["Junaid","Faizan","Khizar","Hanzala","Jamshaid","Ahsan"]
{
    for(let i=0; i<updatedPerson.length; i++)
    {
        for (let j=0; j<updatedPerson.length; j++)
        {
            if(updatedPerson[i]==updatedPerson[j])
            {
                console.log(updatedPerson[i]+`! You are invited at Tuscane for Iftar dinner at 8 PM.`)
                console.log(`Please be there on time as buffet is up to 10 PM.`)
            }
        }
    }
}