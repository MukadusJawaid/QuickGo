import React from "react";
import classes from "./HeroSection.module.css";
import { heroSectionData } from "../data/mockdata";
import { Container, Row, Col } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";
import Button from "../Button/Button";
import img from '../../assets/map.png'

export default function HeroSection() {
  return (
    <section className={classes.section}>
      <Container>
        <Row>
          <div className={classes.imageAndText}>
            <Col md={4}>
              <div className={classes.leftContainer} >
                <div className={classes.text}>
                  <img className={classes.mapImage} src={img} alt="map"/>
                  <h1 className={"h2"}>{heroSectionData[0].title}</h1>
                  <p className={"body2"}>
                    {HTMLReactParser(heroSectionData[0].description)}
                  </p>
                  <div className={classes.Button}>
                    <Button variant={"outline"} className={["body2",classes.button].join(" ")}>
                      {heroSectionData[0].buttonText}
                    </Button>
                    <Button variant={"secondary"} className={["body2", classes.button].join(" ")}>
                      {heroSectionData[0].buttonTextTwo}
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className={classes.rightContainer}>
                <img
                  src={heroSectionData[0].image}
                  alt="deliveryPhoto"
                  className={classes.image}
                />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
}
