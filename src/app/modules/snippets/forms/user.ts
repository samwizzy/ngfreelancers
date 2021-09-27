export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
  ){}
}

export interface IUser {
  name: string,
  email: string,
  password: string,
}
