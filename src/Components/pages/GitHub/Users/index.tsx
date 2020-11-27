import React from "react";

import { Accordion, Card, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";

import { Users } from "../../../../Interfaces/Users";

import "./style.css";

interface Props {
  handleTextChange(textSearch: string): Promise<void>;
  users: Users[];
}

const Users: React.FC<Props> = ({ handleTextChange, users }) => {
  const history = useHistory();

  function getUserInfoCurrent(username: string) {
    history.push(`/gituserlists/${username}`);
  }

  return (
    <div className="styleListUsers">
      <Formik
        initialValues={{ searchUser: "" }}
        onSubmit={(values) => {
          handleTextChange(values.searchUser);
        }}
      >
        <Form className="styleInfoFormsView">
          <label>Pesquise um usuário</label>
          <input
            name="searchUser"
            className="styleSearchBarUser"
            onChange={(val) => {
              handleTextChange(val.target.value);
            }}
          />
        </Form>
      </Formik>
      <Accordion defaultActiveKey="0" style={{ marginTop: 10 }}>
        {users?.length > 0
          ? users?.map((users, index) => {
              return (
                <div
                  key={index}
                  onClick={() => getUserInfoCurrent(users.login)}
                >
                  <Card className="styleSizeCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index.toString()}
                      onClick={(ev) => ev.stopPropagation()}
                    >
                      {users.id + " - " + users.login}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index.toString()}>
                      <Card.Body>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={users.avatar_url}
                            className="styleInfoAvatarUser"
                          />
                          <span style={{ marginLeft: 5, maxWidth: 200 }}>
                            {users.url}
                          </span>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Carousel controls={false} className="styleSizeCarousel">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={users.avatar_url}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3
                          style={{
                            paddingRight: 10,
                            wordBreak: "break-word",
                          }}
                        >
                          {users.html_url}
                        </h3>
                        <p>{users.type}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              );
            })
          : "Nenhum resultado encontrado"}
      </Accordion>
    </div>
  );
};

export default Users;
