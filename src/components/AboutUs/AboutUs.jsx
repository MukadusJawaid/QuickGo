import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./AboutUs.module.css";
import { AboutUsData } from "../data/mockdata";
import HTMLReactParser from "html-react-parser";

export default function AboutUs() {
  return (
    <div>
      <Container className={classes.container}>
        <section className={classes.container}>
          <Row>
            <Col md={6}>
              <div className={classes.imgDiv}>
                <img
                  className={classes.img}
                  src={AboutUsData[0].image}
                  alt="AboutUsImage"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.textDiv}>
                <h1 className="h1">{AboutUsData[0].title}</h1>
                <p className="body2">
                  {HTMLReactParser(AboutUsData[0].description)}
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
