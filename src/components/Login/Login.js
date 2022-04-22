import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword,useSignInWithGoogle  } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const signUppage = () => {
    navigate("/signup");
    
  };
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

    if(user){
      navigate('/products')
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email,password)
    navigate(from, { replace: true });
  };
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h1 className="text-center text-info mt-5 fw-bold">Please Login</h1>
      <div>
        <Form onSubmit={handleSubmit} className="container text-primary w-50 mt-5 border p-4 rounded">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
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
          <br />
          <input
          onClick={() => handleGoogleSignIn()}
          className="btn mt-2 btn-warning"
          type="button"
          value="SignIn With Google"
        />
        </Form>
      </div>
    </div>
  );
};

export default Login;
