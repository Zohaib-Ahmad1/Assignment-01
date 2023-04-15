// Question //
// make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed. 
let username: string[] = ["Admin", "Zohaib584", "Junaid486", "Khizar789", "Faizan202"]
if (username.length == 0)
{
    console.log ("We need to find some users!")
}
else
{
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
}

username.slice(0,5)
console.log(username)
console.log("List is empty, We need to find some users!")