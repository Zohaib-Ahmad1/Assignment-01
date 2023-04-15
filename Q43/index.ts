// Question //
// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number of arguments each time. 

function sandwich(...args: string[])
{
    {
        console.log("\n",args);
        console.log("This sandwich includes: \n"+ args);
    };
}
sandwich("cheese","chicken", "tomato", "ketchup", "lattuce");
sandwich("lettuce", "tomato", "cucumber", "onion", "mustard", "mozzarella");
sandwich("mayonnaise", "egg", "beef", "pickles", "olives");