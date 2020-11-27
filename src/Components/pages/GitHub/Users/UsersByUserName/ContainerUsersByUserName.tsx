import React, { useState } from "react";
import { AxiosError } from "axios";

import service from "../../../../../Services/Api";
import { getOneUser } from "../../../../../Services/Api/Endpoints/Users";
import UsersById from ".";
import { Users } from "../../../../../Interfaces/Users";

const ContainerUserByUserName: React.FC = () => {
  const [user, setUser] = useState<Users>();

  async function getUserByIdService(username: string) {
    await service
      .get(getOneUser + username)
      .then((data) => {
        setUser(data.data)
        return data.data;
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }

  return <UsersById 
  user={user}
  getUserByIdService={getUserByIdService} 
  />;
};

export default ContainerUserByUserName;
