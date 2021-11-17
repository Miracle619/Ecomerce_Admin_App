import React,{useState,useEffect} from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import   { useSelector,useDispatch } from 'react-redux'
import { Redirect } from "react-router";
// import {} from '../../actions'
const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const userLogin =(e) =>{
      e.preventDefault()

      const user = {
        email,password
      }
      dispatch(login(user))
  }

    if (auth.authenticate){
      return <Redirect to={`/`} /> 
    }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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

export default Signin;
