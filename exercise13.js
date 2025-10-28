//exercise13
let originalData = [1, 2, { nested: true }];

let clonedData = originalData.slice();

console.log("originalData === clonedData:", originalData === clonedData); // false (different arrays)
console.log("Shared nested object?",
  originalData[2] === clonedData[2]); 
