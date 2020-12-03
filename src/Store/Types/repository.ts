import { Repository } from './../../Interfaces/Repository';

export const types = {
  getRepositorySeach: "GET_SEARCH_REPOSITORIES",
  getOneRepository: "GET_ONE_REPOSITORY",
  messageErrorRepository: "SHOW_ERROR_REPOSITORY",
};

interface getSearchRepositoriesInterface {
  type: typeof types.getRepositorySeach;
  payload: Repository[];
}

interface getOneRepositoryInterface {
  type: typeof types.getOneRepository;
  payload: Repository;
}

interface showErrorRepositoryInterface {
  type: typeof types.messageErrorRepository;
  payload: string;
}

export type RepositoriesType =
  | getSearchRepositoriesInterface
  | getOneRepositoryInterface
  | showErrorRepositoryInterface;
