export interface Users {
  id: number;
  login: string;
  url: string;
  avatar_url: string;
  html_url: string;
  type: string;
}

export interface UserMethods {
  users: Users[];
}

export interface UserStateObject {
  users: {
    byId: {
      [id: number]: Users;
    };
  };
  allId: number[];
}
