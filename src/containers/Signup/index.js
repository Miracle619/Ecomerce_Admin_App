import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    onChange={() => {}}
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    onChange={() => {}}
                    type="text"
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                placeholder="Email"
                value=""
                onChange={() => {}}
                type="email"
              />

              <Input
                label="Pasword"
                placeholder="Password"
                value=""
                onChange={() => {}}
                type="password"
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
