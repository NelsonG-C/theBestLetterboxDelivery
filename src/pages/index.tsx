import React from "react"
import { Link } from "gatsby"

//components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LineDivider from "../components/lines"
import ServicesList from "../components/servicesList"

import { Row, Col, Carousel, Button } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import gatsbyImg from "../images/gatsby-astronaut.png"

//bootstrap minimum stylesheet
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="home-container" fluid>
      <div className="overlay">
        <Row>
          <Col className="heading-col">
            <h1 className="title-heading">
              Delivering Flyers all across Seymour
            </h1>
            <p className="subtitle-heading">
              Servicing Seymour, Nagambie and Puckapunyal flyer drops
            </p>
          </Col>
        </Row>
      </div>
    </Container>
    <Container>
      <h2 className="service-heading text-center">Services</h2>
      <Container className="test">
        <ServicesList />
      </Container>
    </Container>
    <Container className="about-container">
      <h2 className="about-heading text-center">About</h2>
      <Row className="about-row">
        <Col xs={12} md={4} className="about-col">
          <img alt="about block" src={gatsbyImg} width="200" height="200" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum saepe
            totam sit ut, soluta facere accusantium laborum facilis dolorum
            tempora voluptates, incidunt eaque ducimus assumenda amet blanditiis
            aperiam et molestiae!
          </p>
        </Col>
        <Col xs={12} md={4} className="about-col">
          <img alt="about block" src={gatsbyImg} width="200" height="200" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum saepe
            totam sit ut, soluta facere accusantium laborum facilis dolorum
            tempora voluptates, incidunt eaque ducimus assumenda amet blanditiis
            aperiam et molestiae!
          </p>
        </Col>
        <Col xs={12} md={4} className="about-col">
          <img alt="about block" src={gatsbyImg} width="200" height="200" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum saepe
            totam sit ut, soluta facere accusantium laborum facilis dolorum
            tempora voluptates, incidunt eaque ducimus assumenda amet blanditiis
            aperiam et molestiae!
          </p>
        </Col>
      </Row>
    </Container>
    <LineDivider colorName="yellowline" />
    <Container className="t-container">
      <h2 className="testimonial-heading text-center">Testimonials</h2>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <h3>First Slide Panel detailing the testimonial from the customer</h3>
          <h4>Customer name, Their business name</h4>
        </Carousel.Item>
        <Carousel.Item>
          <h3>
            Second Slide Panel detailing the testimonial from the customer
          </h3>
          <h4>Customer name, Their business name</h4>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Third Slide Panel detailing the testimonial from the customer</h3>
          <h4>Customer name, Their business name</h4>
        </Carousel.Item>
      </Carousel>
    </Container>
    <LineDivider colorName="pinkline" />
    <Container className="quote-container">
      <Row>
        <Col className="quote-text">
          <h2>Get A Quote</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            nemo id, illum sit voluptates veniam dolor commodi excepturi, et
            inventore aperiam illo aliquam necessitatibus eos animi eligendi
            adipisci impedit. Officiis!
          </p>
        </Col>
        <Col md lg={4} className="quote-details-col">
          <h3 className="quote-details">Phone: 0427 991 708</h3>
          <Button>Call Now</Button>
          <h3 className="quote-details">
            Email: thebestletterboxdelivery@bigpond.com
          </h3>
          <Button>Email</Button>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
