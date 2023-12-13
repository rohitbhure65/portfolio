import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import DEVELOPER from '../assets/img/DEVELOPER.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={DEVELOPER} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/rohitbhure65/"><img src={navIcon1} alt="rohit bhure linkedin" /></a>
                <a href="https://www.instagram.com/rohitbhure65/"><img src={navIcon3} alt="rohit bhure instagram" /></a>
            </div>
            <p>Design By Rohit Bhure | Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
