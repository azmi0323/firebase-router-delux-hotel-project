import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setUserConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const handleEmail = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };
  const handlePassword = (event) => {
    const password = event.target.value;
    setUserPassword(password);
  };
  const handleConfirmPassword = (event) => {
    const confirmPassword = event.target.value;
    setUserConfirmPassword(confirmPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userPassword !== confirmPassword) {
      setError("Did not match with the password");
      return;
    }
    if (userPassword.length <= 6) {
      setError("Password should contain six or more characters ");
    }
    createUserWithEmailAndPassword(userEmail, userPassword);
    navigate(Form, { replace: true });
  };

  if (user) {
    navigate("/");
  }
  const loginpage = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-danger mt-5 fw-bold">Please SignUp</h1>
      </div>
      <div>
        <Form
          className="container text-primary w-50 mt-5 border p-4 rounded"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onBlur={handleConfirmPassword}
              type="password"
              placeholder="Confirm Password"
              required
            />
            <p className="text-danger">{error}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={loginpage}
              type="checkbox"
              label="Already have an account?"
            />
          </Form.Group>

          <Button className="btn btn-info" variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
