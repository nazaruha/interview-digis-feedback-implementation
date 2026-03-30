require("module-alias/register");
import { GenericClass } from "@models/generics/GenericNumber";
import { Bee, Lion } from "@models/generics/Zoo";
import { Bird, Fish } from "@models/typeGuards/pets";
import {
  GenericIdentityFn,
  GenericIdentityFn2,
} from "@typings/generics/genericIdentityFn";
import { User } from "@typings/user";
import { constraintLoggingIdentity } from "@utils/generics/constraintLoggingIdentity";
import { createClassInstance } from "@utils/generics/createClassInstance";
import { getProperty } from "@utils/generics/getProperty";
import { identity } from "@utils/generics/identity";
import { loggingIdentity } from "@utils/generics/loggingIdentity";
import { getSmallPet } from "@utils/typeGuards/getSmallPet";
import { PetService } from "./services/PetService";
import { UserService } from "./services/UserService";

// GENERICS

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

// Example of Generic Types with Interfaces
const myIdentityGeneric: <Type>(arg: Type) => Type = identity; // explicitly specifying the type of the generic function
const myIdentityGeneric2: { <Type>(arg: Type): Type } = identity; // another way to explicitly specify the type of the generic function
const myIdentityGeneric3: GenericIdentityFn = identity; // using the interface to specify the type of the generic function
const myIdentityGeneric4: GenericIdentityFn2<number> = identity; // using the interface with a type parameter to specify the type of the generic function

console.log(myIdentityNumber); // Output: 2
console.log(myIdentityString); // Output: Hello, TypeScript!
console.log(myIdentityBoolean); // Output: true
console.log(myLoggingIdentityArray); // Output: [1, 2, 3]
console.log(myLogginIdentityStringArray); // Output: ["a", "b", "c"]
console.log(myIdentityGeneric(42)); // Output: 42
console.log(myIdentityGeneric2("Hello, Generics!")); // Output: Hello, Generics!
console.log(myIdentityGeneric3(true)); // Output: true
console.log(myIdentityGeneric4(3.14)); // Output: 3.14
/* Error, because we specified that the type parameter is number, so it cannot accept a string.
  console.log(myIdentityGeneric4("Not a number"));
*/

// Example of Generic Types with Classes (Genericc Classes)
let myGenericNumber = new GenericClass<number>(0, (x, y) => x + y);
let MyGenericString = new GenericClass<string>("", (x, y) => x + y);

console.log(`myGenericNumber add function: ${myGenericNumber.add(7, 8)}`); // Output: 15
console.log(
  `MyGenericString add function: ${MyGenericString.add("Hello, ", "TypeScript!")}`,
); // Output: Hello, TypeScript!

// Example of Generic Constraints
const myConstraintLoggingIdentity = constraintLoggingIdentity({
  length: 10,
  value: "Hello, Constraints!",
}); // Output: 10
// Error, because the argument does not satisfy the constraint of having a length property.
// constraintLoggingIdentity(42);

console.log(myConstraintLoggingIdentity); // Output: { length: 10, value: "Hello, Constraints!" }

// Example of using the getProperty function with generic constraints to safely access properties of an object
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a")); // Output: 1
// Error, because 'm' does not exist in x
// console.log(getProperty(x, "m"));
(async () => {
  try {
    const users: User[] = await UserService.getUsers();
    for (let i = 0; i < users.length; i++) {
      console.log(
        `#${i + 1}:\n\tName: ${getProperty(users[i], "name")}\n\tAge: ${getProperty(users[i], "age")}`,
      );
    }
  } catch (error) {
    console.log(error);
  }
})();

// Example of using the createClassInstance function with generic constraints to create instances of classes that extend a base class
console.log(createClassInstance(Lion).keeper.nametag); // Output: Mikle
console.log(createClassInstance(Bee).keeper.hasMask); // Output: true
console.log(createClassInstance(Bee).numLegs); // Output: 6

// TYPE GUARDS
const pet = getSmallPet();
if (PetService.isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const pets: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const fishes = pets.filter(PetService.isFish); // TypeScript infers the type of fishes as Fish[] because of the type guard function
const birds = pets.filter(PetService.isBird); // TypeScript infers the type of birds as Bird[] because of the type guard function
pets.forEach((pet) => {
  if (PetService.isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
});
