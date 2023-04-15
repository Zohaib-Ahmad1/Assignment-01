// Question //
//You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Add a new line that prints a message saying that you can invite only two people for dinner.
let guests: string[]=["Hamza","Junaid","Faizan","Khizar","Hamad","Gulbaz","Jamshaid","Ahsan","Usman","Basit","Shahbaz"]
{
    for(let i=0; i<guests.length; i++)
    {
        console.log(guests[i]+`! It makes my heart ache to inform you that our new venue can't hold more than 2 guests.`)
    }
}

//Remove guests from your list one at a time until only two names remain in your list.
//Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let removedGuests: string[]=["Hamza","Junaid","Faizan","Khizar","Hamad","Gulbaz","Jamshaid","Ahsan","Usman","Basit","Shahbaz"]
{
    removedGuests.splice(0,2)
    for(let i=0; i<removedGuests.length; i++)
    {
        console.log(removedGuests[i]+`! I'm so sorry to inform you that I can't invite you to dinner`)
    }
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
let invitedGuests: string[]=["Hamza","Junaid","Faizan","Khizar","Hamad","Gulbaz","Jamshaid","Ahsan","Usman","Basit","Shahbaz"]
{
    invitedGuests.splice(2,9)
    for (let i=0; i<invitedGuests.length; i++)
    {
        console.log(invitedGuests[i]+`! You are still invited for the dinner at Monal on Saturday at 8 PM.`)
    }
}

//Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
let emptyList: string[]=["Hamza","Junaid"]
{
    emptyList.splice(0,2)
    console.log(emptyList)
}