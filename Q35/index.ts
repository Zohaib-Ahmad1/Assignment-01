// Question //
// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it.
//Call the function. 

let make_shirt=(size: (string | number), message: string)=>
{
    console.log(`Shirt if ${size} sized`);
    console.log(message);

}
make_shirt(30, "Molay nu Mola na mary, tay Mola ni marda Nuri Natha");
   