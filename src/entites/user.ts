type UserProps = {
  id?: string;
  name: string;
  email: string;
  age: number;
};

export class User {
  public id?: string;
  public name: string;
  public email: string;
  public age: number;

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.age = props.age;
  }
}
