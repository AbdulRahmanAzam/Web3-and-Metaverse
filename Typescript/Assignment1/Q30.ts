var usernames: string[] = ["Abdul Rahman Azam", "Raghib", "Fahad", "Umar", "Saif", "Talha", "admin"]

for(var i=0; i< 7; i++){
    if(usernames[i] === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else 
        console.log(`Hello ${usernames[i]}, thank you for logging in again`);
}