import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../../../Services/Api";
import { getOneUser } from "../../../../../Services/Api/Endpoints/Users";
import UsersById from ".";
import { Users } from "../../../../../Interfaces/Users";

const ContainerUserByUserName: React.FC = () => {
  const { username }: { username: string } = useParams();

  const { data } = useFetch<Users>(getOneUser + username);

  if (!data) {
    return <p style={{ textAlign: "center" }}>Carregando...</p>;
  }

  return <UsersById user={data} />;
};

export default ContainerUserByUserName;
