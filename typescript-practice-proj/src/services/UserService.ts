import * as fs from "fs/promises";
import * as path from "path";

export class UserService {
  private static filePath = path.join(process.cwd(), "data", "users.json");

  static async getUsers() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.log("Error reading users:", error);
      throw error;
    }
  }

  static async addUser(newUser: any) {
    const users = await this.getUsers();
    users.push(newUser);
    await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
  }
}
