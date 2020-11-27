import React, { useState } from "react";
import { AxiosError } from "axios";

import service from "../../../../../Services/Api";
import { getOneRepository } from "../../../../../Services/Api/Endpoints/Repository";
import RepositoryById from ".";
import { Repository  } from "../../../../../Interfaces/Repository";

const ContainerRepositoryByName: React.FC = () => {
  const [repository, setRepository] = useState<Repository>();

  async function getRepositoryByIdService(id: string) {
    await service
      .get(getOneRepository + id)
      .then((data) => {
        setRepository(data.data);
        console.log(data.data)
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
