// Question //
// Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. 
let username: string[] = ["Admin", "Zohaib584", "Junaid486", "Khizar789", "Faizan202"]
for (let i=0; i<=4; i++ )
{
    if (username[i]== "Admin")
    {
        console.log(`Hello ${username[i]}, would you like to see a status report?`)
    }
    else if (username[i]== "Zohaib584" || username[i]== "Junaid486" || username[i]== "Khizar789" || username[i]== "Faizan202")
    {
        console.log(`Hello ${username[i]}, thank you for logging in again.`)
    }
    else
    {
        console.log("Please enter vaild username")
    }
}