// Question //
// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a
//message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. 

let current_users: string[] = ["Zohaib584", "Junaid486", "Khizar789", "Faizan202", "John969"]
let new_users: string[] = ["Jawad456","Khizar789","JOHN969", "Hamad345", "Shoaib000"]
for (let i = 0; i < new_users.length; i++) 
{
    let same= false;
    for (let j = 0 ; j < current_users.length; j++)
    {
        if ((new_users[i].includes(current_users[j])))
        {
            console.log(`User name ${current_users[j]} already exists. Please enter a new username`)
            same = true; // used to prevent repeatation of the same username if it already exists
        }
        else if (current_users[j].toLowerCase() === new_users[i].toLowerCase())
        {
            console.log(`User name ${new_users[i]} not valid. Please enter a valid username`)
            same= true;
        }
    }
    if (!same)
    {
        console.log(`User name ${new_users[i]} is avilable`)
    }
}