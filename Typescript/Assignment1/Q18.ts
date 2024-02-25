var places : string[] = ["Makkah", "Madina", "America", "Europe", "Thailand"]

// original array
console.log(places)

// 2 ways of shallow copy
// var temp : string[] = places.slice();
var temp : string[] = [...places];

// print in alphabetical order 
console.log("\nPrint temp array in alphabetical array")
temp.sort()
console.log(temp)

// print original array
console.log("\nPrint original array")
console.log(places);

// print in REVERSE alphabetical order
console.log("\nPrint temp array in reverse alphabetical order")
temp.sort().reverse()
console.log(temp)

// reverse original array
console.log("\nPrint original array in reverse order")
places.reverse()
console.log(places);

//  reverse original array again to have it in original shape
console.log("\nPrint original array in reverse order so it is in original shape")
places.reverse()
console.log(places)

// sort original array
console.log("\nPrint original sorted array");
places.sort()
console.log(places)

// Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.

//   ?????????????
