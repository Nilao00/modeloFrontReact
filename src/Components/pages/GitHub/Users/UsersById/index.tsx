import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

import { getUserByIdService, userCurrent } from "./ContainerUsersById";

const UsersById: React.FC = () => {
  const { username }: { username: string } = useParams();

  useEffect(() => {
    getUserByIdService(username);
  }, [userCurrent]);

  return (
    <Card>
      <Card.Header>{userCurrent?.login}</Card.Header>
      <Card.Body>{userCurrent?.url}</Card.Body>
    </Card>
  );
};

export default UsersById;
