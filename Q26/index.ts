// Question //
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
let alien_color1= ['green', 'yellow' , 'red'];
if (alien_color1.includes('green'))
{
    console.log("Congratulations! You just earned 5 points for shooting the alien");
}

//• If the alien is yellow, print a message that the player earned 10 points.
let alien_color2= ['green', 'yellow' , 'red'];
if (alien_color2.includes('yellow'))
{
    console.log("Congratulations! You just earned 10 points for shooting the alien");
}

//• If the alien is red, print a message that the player earned 15 points.
let alien_color3= ['green', 'yellow' , 'red'];
if (alien_color3.includes('red'))
{
    console.log("Congratulations! You just earned 15 points for shooting the alien");
}

//• Write three versions of this program, making sure each message is printed for the appropriate color alien. 
let alien_color4= ['green', 'yellow' , 'red'];
if (alien_color4.includes('green'))
{
    console.log("Congratulations! You just earned 5 points for shooting the Green alien");
}
if (alien_color4.includes('yellow'))
{
    console.log("Congratulations! You just earned 10 points for shooting the Yellow alien");
}
if (alien_color4.includes('red'))
{
    console.log("Congratulations! You just earned 15 points for shooting the Red alien");
}