export interface Users {
  id: number;
  login: string;
  url: string;
  avatar_url: string;
}

export interface UserMethods {
  users: Users[];
}
