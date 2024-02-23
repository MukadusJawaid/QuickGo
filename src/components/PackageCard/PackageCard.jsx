import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { packagesData } from '../data/mockdata';
import classes from './PackageCard.module.css';
import PaymentModal from '../PaymentModal/PaymentModal';
import Button from '../Button/Button';

function PackageCard() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePurchase = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <Container className={classes.container}>
        <h1 className="h1">Our Packages</h1>
        <section className={classes.section}>
          <Row className={'g-4'}>
            {packagesData.map((packageItem, index) => (
              <Col md={6} lg={4} key={index}>
                <div style={{ height: '100%' }}>
                  <Card className={classes.card}>
                    <Card.Img variant="top" src={packageItem.img} className={classes.package} />
                    <Card.Body>
                      <Card.Title className={['h4', classes.title].join(' ')}>
                        {packageItem.title}{' '}
                        <span className={['body2', classes.price].join(' ')}>(${packageItem.price})</span>
                      </Card.Title>
                      <Card.Text className={['body3', classes.description].join(' ')}>
                        {packageItem.description}
                      </Card.Text>
                      <div className={classes.buttonContainer}>
                        <Button 
                          className={['body4', classes.button].join(' ')}
                          variant="secondary"
                          onClick={() => handlePurchase(packageItem)}
                        >
                          Purchase
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
      {selectedProduct && <PaymentModal product={selectedProduct} onClose={handleClose} />}
    </div>
  );
}

export default PackageCard;
