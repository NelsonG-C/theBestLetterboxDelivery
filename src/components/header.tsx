import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//Bootstrap components
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

//Image
import logo from "../images/mailbox.png"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `#ee4cc0`,
      marginBottom: `1.45rem`,
    }}
  >
    <Navbar expand="md">
      <Navbar.Brand className="align-middle">
        <img
          alt="The best letterbox delivery"
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top mr-3"
        />
        The Best Letterbox Delivery
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-button" />
      <Navbar.Collapse id="nav-button" className="justify-content-end">
        <Nav fill>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#quote">Get A Quote</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
