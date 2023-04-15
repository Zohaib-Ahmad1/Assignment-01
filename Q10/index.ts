//Question//
//print a message to the array elements 
//The text of each message should be the same, but each message should be personalized with the person’s name.

//Answer//
let names: string[] = ["Junaid","Faizan","Khizar","Waseel"]
let messages: string[] = ["Don't let anyone fool you, you are doing great"]
{
    for (let i = 0; i < names.length; i++)
    {
        for (let j = 0; j < messages.length;j++)
    {
        console.log(`Hey ${names[i]}, ${messages[j]}!`)
    }
    }
}