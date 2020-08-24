import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Row, Col, Carousel, Button } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import gatsbyImg from "../images/gatsby-astronaut.png"

//bootstrap minimum stylesheet
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col md lg="8">
          <h2>Delivering Flyers all across Seymour</h2>
          <p>Servicing Seymour, Nagambie and Puckapunyal flyer drops</p>
        </Col>
        <Col>
          <img alt="slogan block" src={gatsbyImg} width="300" height="300" />
        </Col>
      </Row>
    </Container>
    <Container>
      <h2 className="text-center">About</h2>
      <Row>
        <Col>
          <img alt="about block" src={gatsbyImg} width="200" height="200" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum saepe
            totam sit ut, soluta facere accusantium laborum facilis dolorum
            tempora voluptates, incidunt eaque ducimus assumenda amet blanditiis
            aperiam et molestiae!
          </p>
        </Col>
        <Col>
          <img alt="about block" src={gatsbyImg} width="200" height="200" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum saepe
            totam sit ut, soluta facere accusantium laborum facilis dolorum
            tempora voluptates, incidunt eaque ducimus assumenda amet blanditiis
            aperiam et molestiae!
          </p>
        </Col>
        <Col>
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
    <Container>
      <h2 className="text-center">Testimonials</h2>
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
    <Container>
      <Row>
        <Col>
          <h2>Get A Quote</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            nemo id, illum sit voluptates veniam dolor commodi excepturi, et
            inventore aperiam illo aliquam necessitatibus eos animi eligendi
            adipisci impedit. Officiis!
          </p>
        </Col>
        <Col>
          <h3>Phone: 0427 991 708</h3>
          <Button>Call Now</Button>
          <h3>Email: thebestletterboxdelivery@bigpond.com</h3>
          <Button>Email</Button>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
