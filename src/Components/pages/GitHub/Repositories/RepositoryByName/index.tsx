import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Repository } from "../../../../../Interfaces/Repository";

interface Props {
  repository: Repository;
  getRepositoryByIdService(id: string): Promise<void>;
}

const RepositoryById: React.FC<Props> = ({
  getRepositoryByIdService,
  repository,
}) => {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    getRepositoryByIdService(id);
  }, []);

  return (
    <Card style={{ margin: 10 }}>
      <Card.Header>{repository?.name}</Card.Header>
      <Card.Body>
        <span>{repository?.url + '. Privado? '}</span>
        <span>{repository?.private ? "Sim" : "Não"}</span>
      </Card.Body>
    </Card>
  );
};

export default RepositoryById;
