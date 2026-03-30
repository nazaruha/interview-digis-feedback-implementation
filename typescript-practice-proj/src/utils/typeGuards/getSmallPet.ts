import { Bird, Fish } from "@models/typeGuards/pets";

export function getSmallPet(): Fish | Bird {
  // For demonstration purposes, we'll randomly return either a Fish or a Bird
  if (Math.random() < 0.5) {
    return new Fish("Nemo");
  }

  return new Bird("Tweety");
}
