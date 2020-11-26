export interface Owner {
  id: number;
  login: string;
  url: string;
  avatar_url: string;
}

export interface Items {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
}

export interface Repository {
  items: Items[];
  total_count: number;
}

export interface RepositoryMethods {
  repositories: Repository[];
}
