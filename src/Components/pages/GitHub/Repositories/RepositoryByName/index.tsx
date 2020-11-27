import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Items } from "../../../../../Interfaces/Repository";

interface Props {
  repository: Items[];
  getRepositoryByIdService(name: string): Promise<void>;
}

const RepositoryById: React.FC<Props> = ({
  getRepositoryByIdService,
  repository,
}) => {
  const { username }: { username: string } = useParams();

  useEffect(() => {
    getRepositoryByIdService(username);
  }, []);

  return (
    <>
      {repository.map((elements, index) => {
        return (
          <Card style={{ margin: 10 }} key={index}>
            <Card.Header>{"Nome: " + elements?.name}</Card.Header>
            <Card.Body>{"Nome completo: " + elements?.full_name}</Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default RepositoryById;
