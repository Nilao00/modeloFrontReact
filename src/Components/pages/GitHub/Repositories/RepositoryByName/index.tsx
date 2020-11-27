import React from "react";
import { Card } from "react-bootstrap";
import { Repository } from "../../../../../Interfaces/Repository";

interface Props {
  repository: Repository;
}

const RepositoryById: React.FC<Props> = ({ repository }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Header>{repository?.name}</Card.Header>
      <Card.Body>
        <span>{repository?.url + ". Privado? "}</span>
        <span>{repository?.private ? "Sim" : "Não"}</span>
      </Card.Body>
    </Card>
  );
};

export default RepositoryById;
