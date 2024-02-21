import React from "react";
import classes from "./ContactUs.module.css";
import { Container, Row, Col } from "react-bootstrap";
import contactUsImages from "../../assets/contactus.jpg"; // Import your images
import Button from '../../components/Button/Button'

export default function ContactUs() {
  return (
    <div>
      <Container className={classes.container}>
        <section className={classes.section}>
          <Row>
            <Col md={6}>
              <div className={classes.textAndInput}>
                <h1 className="h1">Contact Us</h1>
                <input
                  type="text"
                  className={`form-control ${classes.input}`}
                  placeholder="Enter your name"
                />
                <input
                  type="text"
                  className={`form-control ${classes.input}`}
                  placeholder="Enter your email"
                />
                <textarea
                  placeholder="Enter your Message"
                  className={`form-control ${classes.textarea}`}
                />
                <Button className={classes.button} variant={"secondary"}>Submit</Button>
              </div>
            </Col>
            <Col md={6}>
              <img
                className={classes.img}
                src={contactUsImages}
                alt="Contact Us"
              />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
