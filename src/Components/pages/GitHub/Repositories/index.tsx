import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Form, Formik, Field } from "formik";
import { useHistory } from "react-router-dom";

import { Items } from "../../../../Interfaces/Repository";

import "./style.css";

interface Props {
  handleTextChange(textSearch: string): Promise<void>;
  repositories: Items[];
}
const Repositories: React.FC<Props> = ({ repositories, handleTextChange }) => {
  const history = useHistory();

  function getUserInfoCurrent(username: string) {
    history.push(`/gitrepositorieslists/${username}`);
  }

  return (
    <div className="styleListRepository">
      <Formik
        initialValues={{ searchRepository: "" }}
        onSubmit={(values) => {
          handleTextChange(values.searchRepository);
        }}
      >
        {({ errors }) => (
          <Form>
            <Field
              name="searchRepository"
              onKeyUp={(val) => handleTextChange(val.target.value)}
            />
          </Form>
        )}
      </Formik>
      <Accordion defaultActiveKey="0" style={{ marginTop: 10 }}>
        {repositories?.length > 0
          ? repositories?.map((repo, index) => {
              return (
                <Card key={index}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={index.toString()}
                  >
                    {repo.name}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body onClick={() => getUserInfoCurrent(repo.id.toString())}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={repo.owner.avatar_url}
                          className="styleInfoAvatarRepository"
                        />
                        <span style={{ marginLeft: 5 }}>{repo.full_name}</span>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })
          : "Nenhum resultado encontrado"}
      </Accordion>
    </div>
  );
};

export default Repositories;
