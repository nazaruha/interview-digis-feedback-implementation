export function identity<Type>(arg: Type): Type {
  // console.log(arg.length); // Error: Property 'length' does not exist on type 'Type'. Explore the `logginIdentity.ts` file for an example of how to use a generic constraint to solve this.
  return arg;
}
