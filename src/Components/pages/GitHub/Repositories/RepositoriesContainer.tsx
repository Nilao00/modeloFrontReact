import React from "react";
import { AxiosError } from "axios";

import { RepositoryMethods } from "../../../../Interfaces/Repository";

import service from "../../../../Services/Api";

import {
  getOneRepository,
  searchRepository,
} from "../../../../Services/Api/Endpoints/Repository";

import AwesomeDebouncePromise from "awesome-debounce-promise";

import Repository from "./";

const RepositoriesContainer: React.FC<RepositoryMethods> = ({
  repositories,
}) => {
  async function searchRepositoryService(searchResponse: string) {
    await service
      .get(searchRepository + searchResponse)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error: AxiosError) => {
        console.log(error.response.data);
      });
  }

  async function getOneRepositoryService(id: number) {
    await service
      .get(getOneRepository + id)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error: AxiosError) => {
        console.log(error.response.data);
      });
  }

  const searchDebounce = () => {
    return AwesomeDebouncePromise(searchRepositoryService, 900);
  };

  return (
    <Repository
      repositories={repositories}
      searchRepositoryService={searchRepositoryService}
      getOneRepositoryService={getOneRepositoryService}
      searchDebounce={searchDebounce}
    />
  );
};

export default RepositoriesContainer;
