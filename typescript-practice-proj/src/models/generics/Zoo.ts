interface Keeper {
  nametag: string;
}

export class BeeKeeper implements Keeper {
  hasMask: boolean = true;
  nametag: string = "Jacob";
}

export class ZooKeeper implements Keeper {
  nametag: string = "Mikle";
  hasCage: boolean = true;
}

export class Animal {
  numLegs: number = 4;
}

export class Bee extends Animal {
  numLegs: number = 6;
  keeper: BeeKeeper = new BeeKeeper();
}

export class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
