import React from "react"
import { Col } from "react-bootstrap"
import icon from "../images/icon.png"

type serviceNames = ServiceProps[]

interface ServiceProps {
  name: string
  image: HTMLImageElement
}

const serviceNames: serviceNames = [
  { name: "Letterbox", image: icon },
  { name: "Flyer", image: icon },
  { name: "Menus", image: icon },
  { name: "Menus", image: icon },
  { name: "Menus", image: icon },
  { name: "Menus", image: icon },
  { name: "Menus", image: icon },
  { name: "Menus", image: icon },
]

const ServicesList = () => {
  return (
    <div className="service-wrap">
      {serviceNames.map((data: any) => (
        <Col key={data.name}>
          <img className="icons" src={data.image} alt="" />
          <span className="text-service">{data.name}</span>
        </Col>
      ))}
    </div>
  )
}

export default ServicesList
