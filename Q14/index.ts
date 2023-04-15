// Question//
//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let person: string[]=["Junaid","Faizan","Khizar","Hamad","Jamshaid","Ahsan"]
{
    person.push("Usman","Basit","Shahbaz")
    for(let i=0; i<person.length; i++)
    {
        console.log(person[i]+`! You are invited in Tuscane on Saturday for Iftar dinner at 8 PM.`)
    }
}

//Add a print statement to the end of your program informing people that you found a bigger dinner table.
let persons: string[]=["Junaid","Faizan","Khizar","Hamad","Jamshaid","Ahsan","Usman","Basit","Shahbaz"]
{
    for(let i=0; i<persons.length; i++)
    {
        console.log(persons[i]+`! Change in vanue. Now we dine in Monal on Saturday at 8 PM.`)
    }
}

//Add one new guest to the beginning of your array.
let newPersons: string[]=["Junaid","Faizan","Khizar","Hamad","Jamshaid","Ahsan","Usman","Basit","Shahbaz"]
{
    newPersons.unshift("Hamza")
    for(let i=0; i<newPersons.length; i++)
    {
        console.log(newPersons[i]+`! You are invited for Iftar Dinner in Monal on Saturday at 8 PM.`)
    }
}

//Add one new guest to the middle of your array
let newPerson: string[]=["Hamza","Junaid","Faizan","Khizar","Hamad","Jamshaid","Ahsan","Usman","Basit","Shahbaz"]
{
    newPerson.splice(5,0,"Gulbaz")
    for(let i=0; i<newPerson.length; i++)
    {
        console.log(newPerson[i]+`! You are invited for Iftar Dinner in Monal on Saturday at 8 PM.`)
    }
}

//Use append() to add one new guest to the end of your list.
//Print a new set of invitation messages, one for each person in your list.
