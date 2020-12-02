import { all, takeLatest } from "redux-saga/effects";

import { types } from "../Types/users";

import { fetchOneUser, fetchUserSearch } from "./users";

export default function* rootSaga() {
  return yield all([
    takeLatest(types.getUsersSeach, fetchUserSearch),
    takeLatest(types.getOneUser, fetchOneUser),
  ]);
}
