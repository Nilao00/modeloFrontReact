import React, { useState } from "react";
import { AxiosError } from "axios";

import service from "../../../../../Services/Api";
import { getOneRepository } from "../../../../../Services/Api/Endpoints/Repository";
import RepositoryById from ".";
import { Items  } from "../../../../../Interfaces/Repository";

const ContainerRepositoryByName: React.FC = () => {
  const [repository, setRepository] = useState<Items[]>([]);

  async function getRepositoryByIdService(username: string) {
    await service
      .get(getOneRepository + username + '/repos')
      .then((data) => {
        setRepository(data.data);
        return data.data;
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }

  return (
    <RepositoryById
      repository={repository}
      getRepositoryByIdService={getRepositoryByIdService}
    />
  );
};

export default ContainerRepositoryByName;
