import { AxiosError } from "axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";

import service from "../../../../Services/Api";
import {
  getOneUser,
  searchUser,
} from "../../../../Services/Api/Endpoints/Users";
import { Users } from "../../../../Interfaces//Users";

let userInfo: Users[] = [];
async function searchUserService(searchResponse: string) {
  await service
    .get(searchUser + searchResponse)
    .then((data) => {
      userInfo.length = 0;
      userInfo.push(...data.data.items);
      return userInfo;
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

async function handleTextChange(text) {
  if (text != "") {
    await responseUsers(text);
  }
}


export { getOneUserService, searchUserService, handleTextChange, userInfo };
