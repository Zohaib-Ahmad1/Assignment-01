// Question //
// Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly. 

let carInfo=(manufacturer: string, modelName: (string|number), ...otherInfo: any):any => 
{
    let car:any = 
    {
      manufacturer,
      modelName,
    };
    for (let i = 0; i < otherInfo.length; i+=2) 
    {
      let a = otherInfo[i];
      let b = otherInfo[i+1];
      car [a] = b;
    }
    console.log(car);
  }
  carInfo('BMW', 'M8', 'color', 'White-Red', 'year', 2023);

  