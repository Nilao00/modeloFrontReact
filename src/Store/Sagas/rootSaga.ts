import { all, takeLatest } from "redux-saga/effects";

import { types as typeUser } from "../Types/users";

import { types as typeRepository } from "../Types/repository";

import { fetchOneUser, fetchUserSearch } from "./users";

import { fetchOneRepository, fetchRepositorySearch } from "./repositories";

export default function* rootSaga() {
  return yield all([
    takeLatest(typeUser.getUsersSeach, fetchUserSearch),
    takeLatest(typeUser.getOneUser, fetchOneUser),
    takeLatest(typeRepository.getRepositorySeach, fetchRepositorySearch),
    takeLatest(typeRepository.getOneRepository, fetchOneRepository),
  ]);
}
