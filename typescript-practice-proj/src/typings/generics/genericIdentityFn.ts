// Generic interface with a call signature
export interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

// Move the generic parameter to the interface level, so that it can be used in the call signature. This way, we can create a generic interface that works with any type, and we don't have to specify the type parameter every time we use the function.
// It's like `Dictionary<string>` instead of `Dictionary`.
export interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
