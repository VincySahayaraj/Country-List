import React, { useEffect } from "react";
import "../Components/login.css";
import Google from "../asserts/icons/youtube.png";
import Facebook from "../asserts/icons/fb.png";
import Linkedin from "../asserts/icons/linked.png";
import Twitter from "../asserts/icons/twit.png";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="mt-4">
      <div className="icon-main">
        <img src={Google} alt="Google" className="connect-icons" />
        <img src={Facebook} alt="Facebook" className="connect-icons-fb" />
        <img src={Linkedin} alt="LinkedIn" className="connect-icons" />
        <img src={Twitter} alt="Twitter" className="connect-icons" />
      </div>
      <div className="copyrights-div">
        <p>Example@email.com</p>
        <p>Copyright © 2020 Name. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
