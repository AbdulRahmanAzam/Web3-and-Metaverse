let pizza: string[] = ["mayo", "arabian", "makrowni"];

for(const pi of pizza){
    console.log(`I like ${pi} pizza`);
}

let output : string = "";
for(const pi of pizza){
    output += pi + " ";
}
console.log(output);

console.log("I really love pizza");