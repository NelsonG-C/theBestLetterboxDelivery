import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//Bootstrap components
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

//Image
import logo from "../images/gatsby-icon.png"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Navbar expand="md">
      <Navbar.Brand>
        <img
          alt="The best letterbox delivery"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top mr-3"
        />
        The Best Letterbox Delivery
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-button" />
      <Navbar.Collapse id="nav-button" className="justify-content-end">
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#quote">Get A Quote</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div
      style={{
        margin: `0 2rem`,
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        ></Link>
      </h1>
    </div>
  </header>
)

export default Header
