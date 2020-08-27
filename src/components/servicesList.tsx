import React from "react"

type serviceNames = string[]

interface ServiceProps {
  serviceNames: string[]
}

const serviceNames: serviceNames = ["Letterbox", "Flyers", "Menus"]

const ServicesList = () => {
  return (
    <div>
      {serviceNames.map((names: string) => (
        <p>{names}</p>
      ))}
    </div>
  )
}

export default ServicesList
