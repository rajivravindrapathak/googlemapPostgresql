import { Button, Col, Layout, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderCom = () => {
  return (
    <Header>
      <Row gutter={[16, 16]} style={{ justifyContent: "space-evenly" }}>
        <Col
          className="logo"
          style={{ display: "flex" }}
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
        >
          <img
            src="https://img.freepik.com/free-vector/stressed-millennial-guy-studying-before-college-exams-distressed-student-meeting-deadline-doing-assignment-preparing-test-home-with-books-flat-illustration_74855-20731.jpg"
            alt="logo"
            style={{ height: "50px", width: "120px" }}
          />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <h1 style={{ color: "white", margin: 'auto' }}>Google Map app</h1>
        </Col>

        <Col className="subDiv" xs={8} sm={8} md={8} lg={8} xl={8}>
          <Button type="primary">Register</Button>
          <Button style={{ marginLeft: "2%" }} type="primary">
            Login
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderCom;
