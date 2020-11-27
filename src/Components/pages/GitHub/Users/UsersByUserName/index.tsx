import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Users } from "../../../../../Interfaces/Users";

interface Props {
  user: Users;
  getUserByIdService(username: string): Promise<void>;
}

const UsersById: React.FC<Props> = ({ getUserByIdService, user }) => {
  const { username }: { username: string } = useParams();

  useEffect(() => {
    getUserByIdService(username);
  }, []);

  return (
    <Card>
      <Card.Header>{user?.login}</Card.Header>
      <Card.Body>{user?.url}</Card.Body>
    </Card>
  );
};

export default UsersById;
