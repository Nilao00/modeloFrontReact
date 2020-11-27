import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../../../Services/Api";
import { getOneRepository } from "../../../../../Services/Api/Endpoints/Repository";
import RepositoryById from ".";
import { Repository } from "../../../../../Interfaces/Repository";

const ContainerRepositoryByName: React.FC = () => {
  const { id }: { id: string } = useParams();

  const { data } = useFetch<Repository>(getOneRepository + id);

  if (!data) {
    return <p style={{ textAlign: "center" }}>Carregando...</p>;
  }

  return <RepositoryById repository={data} />;
};

export default ContainerRepositoryByName;
