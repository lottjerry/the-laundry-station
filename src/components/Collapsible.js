import { useState } from "react";
import { UilAngleDown } from '@iconscout/react-unicons'

export default function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapsible">
      <div className="collapsible__btn" onClick={() => setIsOpen(!isOpen)}>
        <div className="collapsible-btn__text">{props.label}</div>
        <UilAngleDown className={(isOpen ? "arrow-up" : "arrow-down")}size="30"/>
      </div>
      {isOpen && <div className="collapsible__content">{props.content}</div>}
    </div>
    
  )
}