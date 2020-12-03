import { call, put } from "redux-saga/effects";

import api from "../../Services/Api";

import {
  searchUser as search,
  getOneUser as getUser,
} from "../../Services/Api/Endpoints/Users";

import { searchUser, getOneUser, showErrorUser } from "../Actions/users";

import { Users } from "../../Interfaces/Users";

export function* fetchUserSearch() {
  try {
    const user: Users = yield call(api.get, search);
    yield put(searchUser(user.login));
  } catch {
    yield put(showErrorUser("Error no redux"));
  }
}

export function* fetchOneUser() {
  try {
    const user: Users = yield call(api.get, getUser);
    yield put(getOneUser(user.login));
  } catch {
    yield put(showErrorUser("Error no redux"));
  }
}
