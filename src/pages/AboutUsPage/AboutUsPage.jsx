import React from "react";
import { Container} from "react-bootstrap";
import Navbar from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <Container>
        <AboutUs />
      </Container>
      <Footer />
    </div>
  );
}
