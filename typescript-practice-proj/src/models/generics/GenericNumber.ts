export class GenericClass<Type> {
  zeroValue: Type;

  add: (x: Type, y: Type) => Type;

  constructor(zeroValue: Type, addFunction: (x: Type, y: Type) => Type) {
    this.zeroValue = zeroValue;
    this.add = addFunction;
  }
}
