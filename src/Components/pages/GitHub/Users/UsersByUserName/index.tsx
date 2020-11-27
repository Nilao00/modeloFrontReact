import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Users } from "../../../../../Interfaces/Users";

interface Props {
  user: Users;
//  getUserByIdService(username: string): Promise<void>;
}

const UsersById: React.FC<Props> = ({  user }) => {
  

 /*  useEffect(() => {
    getUserByIdService(username);
  }, []);
 */
  return (
    <Card>
      <Card.Header>{user?.login}</Card.Header>
      <Card.Body>{user?.html_url}</Card.Body>
    </Card>
  );
};

export default UsersById;
