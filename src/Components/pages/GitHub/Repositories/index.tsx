import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Form, Formik, Field } from "formik";

import { RepositoryMethods } from "../../../../Interfaces/Repository";

import "./style.css";

interface Props extends RepositoryMethods {
  searchRepositoryService(searchResponse: string): Promise<void>;
  getOneRepositoryService(id: number): Promise<void>;
  searchDebounce(): void;
}
const Repositories: React.FC<Props> = ({
  repositories,
  getOneRepositoryService,
  searchDebounce,
  searchRepositoryService,
}) => {
  return (
    <div className="styleListUsers">
      <Formik
        initialValues={{ searchRepository: "" }}
        onSubmit={(values) => {
          searchRepositoryService(values.searchRepository);
        }}
      >
        {({ errors }) => (
          <Form>
            <Field
              name="searchRepository"
              onKeyUp={(val) => searchRepositoryService(val.target.value)}
            />
          </Form>
        )}
      </Formik>
      <Accordion defaultActiveKey="0">
        {console.log(repositories)}
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            ola{" "}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Repositories</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Repositories;
