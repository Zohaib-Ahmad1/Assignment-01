//Questions//
//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order and print the original array
let vacation: string[] =["Sakardu","Lolosar Lake","Deosai","Pasu cones"]
{
    console.log(vacation)
}

//Show that your array is still in its original order and then print in alphabetical order without modifying
let ascending: string[] =["Sakardu","Lolosar Lake","Deosai","Pasu cones"]
console.log(ascending)
{
    ascending.sort((a, b) => a.localeCompare(b));
    console.log(ascending);
}

//Reverse the order of your list. Print the array to show that its order has changed and then reverse back to original
let descending: string[] =["Sakardu","Lolosar Lake","Deosai","Pasu cones"]
console.log(descending)
{
    descending.sort((a, b) => b.localeCompare(a));
    console.log(descending);
}

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let vacation2: string[] =["Sakardu","Lolosar Lake","Deosai","Pasu cones"]
console.log(vacation2)
{
    vacation2.sort();
    console.log(vacation2)
}

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let reverseVacation: string[] =["Sakardu","Lolosar Lake","Deosai","Pasu cones"]
console.log(reverseVacation)
{
    reverseVacation.sort()
    reverseVacation.reverse();
    console.log(reverseVacation)
}