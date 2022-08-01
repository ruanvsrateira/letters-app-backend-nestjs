export default class UserDTO {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(props: Omit<UserDTO, 'id'>) {
    Object.assign(this, props);
  }
}
