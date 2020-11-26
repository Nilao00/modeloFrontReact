import React, { useState } from "react";

import { Accordion, Card } from "react-bootstrap";

import { Formik, Form, Field } from "formik";

import {
  getOneUserService,
  searchUserService,
  responseUsers,
} from "./UsersContainer";

import { Users } from "../../../../Interfaces/Users";

import "./style.css";

const Users: React.FC = () => {
  const [usersinfo, setUsers] = useState<Users[]>([]);

  return (
    <div className="styleListUsers">
      <Formik
        initialValues={{ searchUser: "" }}
        onSubmit={(values) => {
          searchUserService(values.searchUser);
        }}
      >
        <Form className="styleInfoFormsView">
          <label>Pesquise um usuário</label>
          <Field type="text" name="searchuser" className="styleSearchBarUser" />
        </Form>
      </Formik>
      <Accordion defaultActiveKey="0">
        {usersinfo.length > 0
          ? usersinfo.map((users, index) => {
              <Card key={index}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  {users.login}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={users.avatar} className="styleInfoAvatarUser" />
                      <span>{users.url}</span>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>;
            })
          : "Nenhum resultado encontrado"}
      </Accordion>
    </div>
  );
};

export default Users;
