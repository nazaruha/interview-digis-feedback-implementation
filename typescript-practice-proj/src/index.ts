require("module-alias/register");
import { identity } from "@utils/generics/identity";
import { loggingIdentity } from "@utils/generics/loggingIdentity";

// Example usage of the identity function with different types
const myIdentityNumber = identity(2); // compiler infers the type of myIdentity as number
const myIdentityString = identity("Hello, TypeScript!"); // compiler infers the type of myIdentity as string
const myIdentityBoolean = identity<boolean>(true); // explicitly specifying the type

// Example usage of the loggingIdentity function
const myLoggingIdentityArray = loggingIdentity([1, 2, 3]); // compiler infers the type of myLoggingIdentityArray as number[]
const myLogginIdentityStringArray: Array<string> = loggingIdentity<string>([
  "a",
  "b",
  "c",
]); // explicitly specifying the type

console.log(myIdentityNumber); // Output: 2
console.log(myIdentityString); // Output: Hello, TypeScript!
console.log(myIdentityBoolean); // Output: true
console.log(myLoggingIdentityArray); // Output: [1, 2, 3]
console.log(myLogginIdentityStringArray); // Output: ["a", "b", "c"]
