import { RepositoriesType, types } from "../Types/repository";

export function searchRepository(payload: string): RepositoriesType {
  return {
    type: types.getRepositorySeach,
    payload,
  };
}

export function getOneRepository(payload: string): RepositoriesType {
  return {
    type: types.getOneRepository,
    payload,
  };
}

export function showErrorRepository(payload: string): RepositoriesType {
  return {
    type: types.messageErrorRepository,
    payload,
  };
}
