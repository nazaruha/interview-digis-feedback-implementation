interface Lengthwise {
  length: number;
}

export function constraintLoggingIdentity<Type extends Lengthwise>(
  arg: Type,
): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
