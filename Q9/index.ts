//Question//
//Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.

//Amswer//
let names: string[] = ["Junaid","Faizan","Khizar","Waseel"]
{
    console.log(names)
    for (let i = 0; i < names.length; i++)
    {
        console.log(names[i])
    }
}