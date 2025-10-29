import { User, type UserProps } from "../entites/user";

export class UsersRepository {
  public users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  create(userProps: UserProps) {
    const user = new User({
      ...userProps,
      id: this.users.length + 1,
    });

    this.users.push(user);

    return user;
  }

  findMany() {
    return this.users;
  }

  findById(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }
}
