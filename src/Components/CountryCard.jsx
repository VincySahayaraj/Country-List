import React from "react";
import { Card, Row,Col } from "react-bootstrap";
import "./login.css";

const CountryCard = ({ country }) => {
  return (
    <Card style={{ borderRadius: "0px", border: "2px solid #3E3E3E" }}>
      <Row>
        <Col md={4} xs={4} sm={4}>
          {" "}
          <Card.Img className="card-img-country"
            variant="top"
            src={country.flag}
            
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col md={8} xs={8} sm={8}>
          {" "}
          <Card.Body>
            <Card.Title className="country-title">{country.name}</Card.Title>
            <Card.Text className="country-title-text">{country.region}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CountryCard;
