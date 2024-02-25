var GuestList : string[] = ["Umar","Saif","Talha"];

for(const index in GuestList){
    console.log(GuestList[index] + " " + "You are invited to the dinner")
}
console.log("\n")

let notcoming = "Umar";
let indexofnotcoming = GuestList.indexOf("Umar")
//error handling
if(indexofnotcoming !== -1){
    GuestList[indexofnotcoming] = "Fasih";
}

for(const index in GuestList){
    console.log(GuestList[index] + " " + "You are invited to the dinner")
}
console.log("\n")

console.log(notcoming + " was not coming to party");

console.log("I found a bigger dinner table")

GuestList.unshift("Ali"); // starting
GuestList.splice((GuestList.length/2)+1, 0, "Owais") // middle
GuestList.push("John"); // last

console.log("\n")
for(const index in GuestList){
    console.log(GuestList[index] + " " + "You are invited to the dinner")
}

console.log("\nI can invite only 2 people for dinner")

while(GuestList.length > 2){
    var removeGuest = GuestList.pop();
    console.log(removeGuest + " Sorry i can't invite you to the dinner")
}
console.log("\n")
for(var index in GuestList){
    console.log(GuestList[index] + " You are still invited for the dinner")
}

GuestList.pop();
GuestList.pop();


// if(Guestlist !== -1){
    console.log(GuestList)
// }

