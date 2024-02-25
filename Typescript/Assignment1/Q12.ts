
let names: string[] = ["Abdul Rahman Azam", "Raghib", "Fahad"]
let message: string = "Welcome bro"

for(var index in names){
    names[index] = names[index] + " " + message
}
// names[0] = names[0] + message;
// names[1] = names[1] + message;
// names[2] = names[2] + message;

for(var i in names){
    console.log(names[i])
}