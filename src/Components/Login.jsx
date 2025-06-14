import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./login.css";
import Google from "../asserts/icons/google.png";
import Facebook from "../asserts/icons/facebook.png";
import Linkedin from "../asserts/icons/linkedin.png";
import Twitter from "../asserts/icons/twitter.png";
import LoginSlide from "../asserts/login-slide-img.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !validatePassword(password)) {
      setError("Invalid email or password format.");
      return;
    }
    console.log("Login Form:::" + email + password + keepSignedIn);
    navigate("/home");
  };

  return (
    <Row className="justify-content-md-center login-main">
      <Col md={6} sm={12} xs={12} className="remove-padding">
        <div className="p-100">
          <div className="sign-in-heading">
            <h2>Sign In</h2>
            <h6>
              New User?
              <span className="create-an-account">&nbsp;&nbsp; Create an account</span>
            </h6>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Control
                className="form-input-value"
                placeholder="Username or email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Control
                className="form-input-value"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCheckbox" className="mt-3">
              <Form.Check
                type="checkbox"
                label="Keep me signed in"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
              />
            </Form.Group>

            <Button type="submit" className="sign-in-btn">
              Sign In
            </Button>

            <div className="sign-in-with">
              <span className="line-input"></span>
              <span className="sign-in-with-text">Or Sign In With</span>
              <span className="line-input"></span>
            </div>
          </Form>
          <div className="icon-main">
            <img src={Google} alt="Google" className="connect-icons" />
            <img src={Facebook} alt="Facebook" className="connect-icons-fb" />
            <img src={Linkedin} alt="LinkedIn" className="connect-icons" />
            <img src={Twitter} alt="Twitter" className="connect-icons" />
          </div>
        </div>
      </Col>
      <Col md={6} className="login-img-main">
        <div className="login-img p-140">
          <img src={LoginSlide} alt="login-slide" />
        </div>
      </Col>
    </Row>
  );
};

export default Login;
