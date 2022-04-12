import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setUserConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

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
    if (userPassword !==confirmPassword) {
      setError("Did not match with the password");
      return;
    }
    if(userPassword<=6){
        setError('Password should contain six or more characters ')
    }
    createUserWithEmailAndPassword(userEmail,userPassword)
  };


  return (
    <div>
      <Form className="container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
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
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
          <p className="text-danger">{error}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
