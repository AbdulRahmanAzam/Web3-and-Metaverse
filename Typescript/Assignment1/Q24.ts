// Pascal case
let Name1 : string = "Abdul Rahman Azam",
Name2 : string = "abdul rahman azam";

console.log("Name1 and Name2 == ", Name1 === Name2);
console.log("Name1 and Name2 != ", Name1 != Name2);
console.log("Name1 and Name2 (in lower case)", Name1.toLowerCase() === Name2.toLowerCase());

console.log("Name1 > Name2 (numerical tests)", Name1 > Name2);

var a: number = 10;
var b: number = 20;

if(a == b){
    console.log("a == b", true);
}else if(a > b){
    console.log("a > b", true);
}else if(a < b){
    console.log("a < b", true);
}

if(a > 0 && a < b){
    console.log("a is between 0 and b");
}else {
    console.log("a is not in between 0 and b")
}

if(a > 0 || a > b){
    console.log("may be a is greater than 0 or a is greater than b")
}


var arr: number[] = [1, 2, 3, 4, 5];

console.log("Is item 3 in an array ", arr.indexOf(3));

console.log("Is item 10 is present in an array   " ,(arr.indexOf(10) !== -1)? true :false );





