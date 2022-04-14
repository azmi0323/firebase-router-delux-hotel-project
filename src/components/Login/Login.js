import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signUppage = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h1 className="text-center text-info mt-5 fw-bold">Please Login</h1>
      <div>
        <Form className="container text-primary w-50 mt-5 border p-4 rounded">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={signUppage}
              type="checkbox"
              label="New at this hotel?"
            />
          </Form.Group>

          <Button className="btn btn-info" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
