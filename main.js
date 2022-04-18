// Relative file path
// import User from '/user.js'
// import { printName } from "./user";
// import U,{ printName} from '/user.js'
// import U,{ printName,printAge} from '/user.js'
import U,{ printName as printUseName,printAge} from '/user.js'

// const user  = new User('Michael', 52);
const user  = new U('Michael', 52);
console.log(user);

// printName(user);
printUseName(user);
printAge(user);