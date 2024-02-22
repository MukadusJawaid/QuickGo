import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./HomePage.module.css";
import Navbar from "../../components/Navigation/Navigation";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import PackageCard from "../../components/PackageCard/PackageCard";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <Row>
          <HeroSection />
          <PackageCard />
          <AboutUs />
          <ContactUs />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
