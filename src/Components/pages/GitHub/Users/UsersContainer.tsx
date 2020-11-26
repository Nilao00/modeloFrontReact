import { AxiosError } from "axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";

import service from "../../../../Services/Api";
import {
  getOneUser,
  searchUser,
} from "../../../../Services/Api/Endpoints/Users";

async function searchUserService(searchResponse: string) {
  await service
    .get(searchUser + searchResponse)
    .then((data) => {
      return data.data.items;
    })
    .catch((error: AxiosError) => {
      console.log(error.response.data);
    });
}

function* getOneUserService(id: number) {
  yield service
    .get(getOneUser + id)
    .then((data) => {
      return data.data.items;
    })
    .catch((error: AxiosError) => {
      console.log(error.response.data);
    });
}

const responseUsers = AwesomeDebouncePromise(searchUserService, 900);

export { getOneUserService, searchUserService, responseUsers };
