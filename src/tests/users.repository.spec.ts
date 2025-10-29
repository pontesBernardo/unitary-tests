import { beforeEach, describe, expect, it } from "vitest";
import { UsersRepository } from "../repositories/users.repository";

describe("Users Repository", () => {
  let usersRepository: UsersRepository;

  beforeEach(() => {
    usersRepository = new UsersRepository([
      {
        id: 1,
        name: "Augustinho",
        age: 29,
        email: "augustinho@example.com",
      },
      {
        id: 2,
        name: "Rodolfo",
        age: 32,
        email: "rodolfo@example.com",
      },
    ]);
  });

  it("should be able to create a new user", () => {
    const createdUser = usersRepository.create({
      age: 25,
      email: "gustavo@example.com",
      name: "Gustavo",
    });

    expect(createdUser).toHaveProperty("id");
  });

  it("shoud be able to return all users", () => {
    const users = usersRepository.findMany();

    expect(users).toHaveLength(2);
  });

  it("should be able to return one user by id", () => {
    const user = usersRepository.findById(1);

    expect(user?.name).toEqual("Augustinho");
  });
});
