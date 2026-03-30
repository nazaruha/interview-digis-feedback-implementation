import { Bird, Fish } from "@models/typeGuards/pets";

export class PetService {
  // (type predicates) Type guard functions to determine if a pet is a Fish or a Bird
  // functions' return type is a type predicate that tells TS what type the parameter is if the function return true
  static isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  static isBird(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined;
  }
}
