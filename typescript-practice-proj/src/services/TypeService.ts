export class TypeService {
  static isString(value: any): value is string {
    return typeof value === "string";
  }

  static isNumber(value: any): value is number {
    return typeof value === "number";
  }
}
