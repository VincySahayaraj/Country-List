import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  loadMore,
  filterByRegion,
} from "../Store/CountrySlice";
import CountryCard from "../Components/CountryCard";
import Slider from "../Components/Slider";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Nav,
  Spinner,
} from "react-bootstrap";
import "./home.css";
import Footer from "./Footer";
import MobileSideMenu from "./MobileSideMenu";

const Home = () => {
  const dispatch = useDispatch();
  const { filtered, visibleCount, loading } = useSelector(
    (state) => state.countries
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleFilter = (e) => {
    dispatch(filterByRegion(e.target.value));
  };

  return (
    <Container className="mt-4">
      <div className="countries-header">
        <h6>Countries</h6>
        {/* Tabs for Desktop */}
        <Nav
          variant="tabs"
          defaultActiveKey="All"
          onSelect={(selectedKey) =>
            handleFilter({ target: { value: selectedKey } })
          }
          className="mb-3 region-tabs"
        >
          <Nav.Item>
            <Nav.Link eventKey="All">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Africa">Africa</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Americas">Americas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Asia">Asia</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Europe">Europe</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Oceania">Oceania</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Hamburger Menu for Mobile */}
        <MobileSideMenu handleFilter={handleFilter} />
      </div>

      <div className="welcome-heading">
        <span className="line-input-countries-left"></span>
        <h2>WELCOME</h2> <span className="line-input-countries-right"></span>
      </div>

      {/* slider */}
      <Row>
        <Col xs={12} md={8} className="order-2 order-md-1">
          <Slider />
        </Col>
        <Col xs={12} md={4} className="order-1 order-md-2">
          <div className="empty-div"></div>
        </Col>
      </Row>

      <Row>
        {/* Loader */}
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "200px" }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          // Country Card
          filtered.slice(0, visibleCount).map((country) => (
            <Col key={country.name} md={6} className="mb-4">
              <CountryCard country={country} />
            </Col>
          ))
        )}
      </Row>
      {/* Load More Button */}
      {visibleCount < filtered.length && (
        <Button className="load-more-btn" onClick={() => dispatch(loadMore())}>
          Load More
        </Button>
      )}

      <Footer />
    </Container>
  );
};

export default Home;
