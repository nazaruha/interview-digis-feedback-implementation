// Alternative way to write `Type[]` is `Array<Type>`. Both are valid and you can choose the one you prefer.
export function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
