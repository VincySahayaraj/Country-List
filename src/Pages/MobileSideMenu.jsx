import React, { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa"; // Hamburger icon

const MobileSideMenu = ({ handleFilter }) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const [activeRegion, setActiveRegion] = useState("All");

  const handleSelect = (region) => {
    setActiveRegion(region);
    handleFilter({ target: { value: region } });
    setShow(false); // Close after selecting
  };

  return (
    <>
      {/* Hamburger button - visible only on mobile */}
      <div className="d-md-none">
        <Button className="ham-menu-btn" onClick={toggleMenu}>
          <FaBars size={24} />
        </Button>
      </div>

      {/* Offcanvas Side Menu */}
      <Offcanvas
        show={show}
        onHide={toggleMenu}
        responsive="md"
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Regions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column" onSelect={handleSelect}>
            {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
              (region) => (
                <Nav.Link
                  key={region}
                  eventKey={region}
                  active={activeRegion === region}
                  style={{
                    backgroundColor:
                      activeRegion === region ? "#007bff" : "transparent",
                    color: activeRegion === region ? "#fff" : "#000",
                    borderRadius: "5px",
                    marginBottom: "4px",
                  }}
                >
                  {region}
                </Nav.Link>
              )
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileSideMenu;
