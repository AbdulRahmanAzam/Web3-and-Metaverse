var GuestList : string[] = ["Umar","Saif","Talha"];

for(const index in GuestList){
    console.log(GuestList[index] + " " + "You are invited to the dinner")
}

let notcoming = "Umar";
let indexofnotcoming = GuestList.indexOf("Umar")
//error handling
if(indexofnotcoming !== -1){
    GuestList[indexofnotcoming] = "Fasih";
}

for(const index in GuestList){
    console.log(GuestList[index] + " " + "You are invited to the dinner")
}

console.log(notcoming + " was not coming to party");