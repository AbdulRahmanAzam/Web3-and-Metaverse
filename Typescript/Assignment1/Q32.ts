var current_users: string[] = ["Abdul Rahman Azam", "Raghib", "Fahad", "Umar", "Saif"];
var new_users: string[] = ["John", "Abdul Basit Azam", "Fahad", "Umar", "Anas"];

var flag:boolean = false;

// for(const current of current_users){
//     flag = true;
//     for(const newu of new_users){
//         if(current.toLowerCase() === newu.toLowerCase()){
//             console.log(`The person named ${newu} should have to enter a new username`);
//             flag = false;
//             break;
//         }
//     }
//     if(flag){
//         console.log(`usernames ${current} is available`);
//     }
// }


// here "SOME" mehtod is used to iterate over new_users and check if any of them matches
for(const current of current_users){
    
    if(new_users.some(user => user.toLowerCase() === current.toLowerCase())){
        console.log(`Sorry, the username '${current}' is already taken. Please enter a new username.`);
    }else{
        console.log(`usernames ${current} is available`);
    }
}