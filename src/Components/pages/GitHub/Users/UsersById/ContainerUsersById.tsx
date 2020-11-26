import { AxiosError } from "axios";

import service from "../../../../../Services/Api";
import { getOneUser } from "../../../../../Services/Api/Endpoints/Users";
import { Users } from "../../../../../Interfaces/Users";

let userCurrent: Users;
async function getUserByIdService(username: string) {
  await service
    .get(getOneUser + username)
    .then((data) => {
      userCurrent = data.data;
      return userCurrent;
    })
    .catch((error: AxiosError) => {
      console.log(error);
    });
}
console.log(userCurrent)

export { getUserByIdService, userCurrent };
