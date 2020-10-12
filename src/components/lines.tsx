import React from "react"

//Styles
import "../styles.css"

interface LineProps {
  colorName: string
}

const LineDivider: React.FC<LineProps> = ({ colorName }) => {
  return (
    <div>
      <div className={colorName}></div>
      <div className="blackline"></div>
      <div className={colorName}></div>
    </div>
  )
}

export default LineDivider
