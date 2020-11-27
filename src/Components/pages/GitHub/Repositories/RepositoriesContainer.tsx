import React, { useState } from "react";
import { AxiosError } from "axios";

import service from "../../../../Services/Api";

import {
  searchRepository,
} from "../../../../Services/Api/Endpoints/Repository";

import AwesomeDebouncePromise from "awesome-debounce-promise";

import RepositoryView from "./";
import { Items } from "../../../../Interfaces/Repository";

const RepositoriesContainer: React.FC = () => {
  const [repositories, setRepositories] = useState<Items[]>([]);

  async function searchRepositoryService(searchResponse: string) {
    await service
      .get(searchRepository + searchResponse)
      .then((data) => {
        setRepositories(data.data.items);
        return data.data.items;
      })
      .catch((error: AxiosError) => {
        console.log(error.response.data);
      });
  }

  const responseUsers = AwesomeDebouncePromise(searchRepositoryService, 900);

  async function handleTextChange(textSearch: string) {
    if (textSearch != "") {
      await responseUsers(textSearch);
    }
  }

  return (
    <RepositoryView
      repositories={repositories}
      handleTextChange={handleTextChange}
    />
  );
};

export default RepositoriesContainer;
