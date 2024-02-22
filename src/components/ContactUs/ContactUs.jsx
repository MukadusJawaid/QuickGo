import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactUsImages from "../../assets/contactus.jpg"; 
import Button from "../../components/Button/Button";
import classes from "./ContactUs.module.css";


export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    setLoading(true);
    // Call API method
    setTimeout(() => {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      alert("Thank you for contacting us. We will reach out soon.");
    }, 2000);
  };

  return (
    <div>
  
      <Container className={classes.container}>
        <section className={classes.section}>
          <Row>
            <Col md={6}>
              <div className={classes.textAndInput}>
                <h1>Contact Us</h1>
                <input
                  type="text"
                  className={`form-control ${classes.input}`}
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className={`form-control ${classes.input}`}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Enter your Message"
                  className={`form-control ${classes.textarea}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Button
                  className={classes.button}
                  onClick={handleSubmit}
                  disabled={loading}
                  variant={"secondary"}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
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
