//Qustion//
//Name Cases: Store a person’s name in a variable, then print that person’s name in lowercase, uppercase, and titlecase//

//Aswer//
let first: string = "hello zohaib"
{
    console.log(`Upper case is ${first.toUpperCase()}`);
}

let second: string = "HELLO ZOHAIB"
{
    console.log(`Lower case is ${second.toLowerCase()}`);
}

let third: string = "HELLO ZOHAIB"
{
    let sentence = third.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++)
    {
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1).toLowerCase();
    }
    console.log(`Tile case is ${sentence.join(" ")}`);
}


