import { call, put } from "redux-saga/effects";

import api from "../../Services/Api";

import {
  searchRepository as search,
  getOneRepository as getRepository,
} from "../../Services/Api/Endpoints/Repository";

import { searchRepository,getOneRepository,showErrorRepository } from "../Actions/repositories";

import { Repository } from "../../Interfaces/Repository";

export function* fetchRepositorySearch() {
  try {
    const repository: Repository = yield call(api.get, search);
    yield put(searchRepository(repository.name));
  } catch {
    yield put(showErrorRepository("Error no redux"));
  }
}

export function* fetchOneRepository() {
  try {
    const repository: Repository = yield call(api.get, getRepository);
    yield put(getOneRepository(repository.name));
  } catch {
    yield put(showErrorRepository("Error no redux"));
  }
}
