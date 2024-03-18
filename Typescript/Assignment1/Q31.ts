var usernames: string[] = ["Abdul Rahman Azam", "Raghib", "Fahad", "Umar", "Saif", "Talha", "admin"]
// var usernames: string[] = [];

if(usernames.length == 0){
    console.log("We need to find some users");
}else{
    for(var i =usernames.length - 1; i >= 0 ; i--){
        if(usernames[i] === "admin"){
            console.log("Hello admin, would you like to see a status report?");
        }else 
            console.log(`Hello ${usernames[i]}, thank you for logging in again`);

        usernames.pop();
    }
}

if(usernames.length == 0){
    console.log("We need to find some users");
}

console.log(usernames);