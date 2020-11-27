import React, { useState } from "react";
import { AxiosError } from "axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";

import service from "../../../../Services/Api/";
import { searchUser } from "../../../../Services/Api/Endpoints/Users";
import UserView from "./";
import { Users } from "../../../../Interfaces/Users";

const UsersContainer: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);

  async function searchUserService(searchResponse: string) {
    await service
      .get(searchUser + searchResponse)
      .then((data) => {
        setUsers(data.data.items);
        return data.data.items;
      })
      .catch((error: AxiosError) => {
        console.log(error.response.data);
      });
  }

  const responseUsers = AwesomeDebouncePromise(searchUserService, 900);

  async function handleTextChange(textSearch: string) {
    if (textSearch != "") {
      await responseUsers(textSearch);
    }
  }

  return <UserView handleTextChange={handleTextChange} users={users}  />;
};

export default UsersContainer;
