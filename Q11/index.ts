//Question//
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//Answer//
let transport: string[]= ["Ducati","Prius","Cruser","Kawasaki Ninja H2 SX SE","BMW S 1000 RR cycle"]
let statement: string[]=["I would like to own a"]
{
    for(let i=0; i<transport.length; i++)
    {
        for (let j=0; j<statement.length; j++)
        {
            console.log(statement[j]+` `+transport[i])
        }
    }
}
