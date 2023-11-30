//### TASK ###
// you need take a few username from as input from user
// and add usernames in an array of usernames
// before adding make sure the username is valid username
//   - Validity:
//           - username can not ne admin or Admin or ADMIN
//           - username must be morthan 5 and less than 20 characters





// create an empty array : usernames
// run a for loop five times
// input username
// inside for loop put check for validity
// if valid then add username in usernames array
// console the usernames array


// let usernames = []
// for(let a=0; a<5; a++){
//     let username = prompt(" create a username ")
//     if (username != "admin" && username != "Admin" && username != "ADMIN")
//         if (username.length >=5 && username.length <=20){
//             usernames.push(username)
//             console.log("username added")
//         }

    
    
    
//          else{
//          console.log("invalid username")
//     }
//     else{
//         console.log("invalid username")

//     }
// }

let arr = ["A","B","C","D","E"]
let char = prompt("Enter a char").toUpperCase()
for (let a=0; a<arr.length;a++){
    if (arr[a] != char){
        console.log('Absent')
        console.log("added")
    }
    else{
        console.log("Present")
    }
}
    

