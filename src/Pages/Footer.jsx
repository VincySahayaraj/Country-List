import React, { useEffect } from "react";
import "../Components/login.css";
import Youtube from "../asserts/icons/youtube.png";
import Facebook from "../asserts/icons/facebook.png";
import Linkedin from "../asserts/icons/linkedin.png";
import Twitter from "../asserts/icons/twitter.png";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="mt-4">
      <div className="icon-main">
        <div className="icon-outer">
          <img src={Facebook} alt="Facebook" className="connect-icons" />
        </div>
        <div className="icon-outer">
          <img src={Twitter} alt="Twitter" className="connect-icons" />
        </div>
        <div className="icon-outer">
          <img src={Linkedin} alt="LinkedIn" className="connect-icons" />
        </div>
        <div className="icon-outer">
          <img src={Youtube} alt="Google" className="connect-icons" />
        </div>
      </div>
      <div className="copyrights-div">
        <p>Example@email.com</p>
        <p>Copyright © 2020 Name. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
