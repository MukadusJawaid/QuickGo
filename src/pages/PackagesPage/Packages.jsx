import React from "react";
import PackageCard from "../../components/PackageCard/PackageCard";
import { Container } from "react-bootstrap";
import Navbar from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function Packages() {
  return (
    <div>
      <Navbar />
      <Container>
        <PackageCard />
      </Container>
      <Footer />
    </div>
  );
}
