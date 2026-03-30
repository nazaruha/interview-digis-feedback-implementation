// Constraint a second type parameter to be a key of the first type parameter
export function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
