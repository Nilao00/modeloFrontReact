export interface Users {
  id: number;
  login: string;
  url: string;
  avatar: string;
}

export interface UserMethods {
  users: Users[];
}
