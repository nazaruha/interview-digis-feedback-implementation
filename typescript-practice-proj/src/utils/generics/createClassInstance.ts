import { Animal } from "@models/generics/Zoo";

export function createClassInstance<ClassType extends Animal>(
  c: new () => ClassType,
): ClassType {
  return new c();
}
