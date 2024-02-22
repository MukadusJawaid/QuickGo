import React from "react";
import { Container} from "react-bootstrap";
import Navbar from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";
import classes from './AboutPage.module.css'
export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <AboutUs />
      </Container>
      <Footer />
    </div>
  );
}
