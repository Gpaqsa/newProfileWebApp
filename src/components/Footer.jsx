import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/image/nav-icon1.svg";
import navIcon2 from "../assets/image/nav-icon2.svg";
import navIcon3 from "../assets/image/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h2>G.PAKSA</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/giorgi-paksashvili-a7a47b207/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/giorgi.paqsashvili.12">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#www.google.com">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
