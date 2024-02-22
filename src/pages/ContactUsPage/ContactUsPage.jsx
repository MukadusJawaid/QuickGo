import React from "react";
import { Container} from "react-bootstrap";
import Navbar from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <Container>
        <ContactUs />
      </Container>
      <Footer />
    </div>
  );
}
