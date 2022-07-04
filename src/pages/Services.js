import Heading from "../components/Heading";
import FoldedClothes from '../assets/img/folded-clothes.jpg'
import { UilAngleDown } from '@iconscout/react-unicons'
import { useState } from "react";

export default function Services() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  return (
    <section className="services" id="services">
      <Heading title="Services" subtitle="Professional service for all your laundry needs."/>
      <div className="services__content">
        <div className="services-content__header">
          <img 
            src={FoldedClothes} 
            alt="Folded Clothes" 
            className="services-header__img"
          />
          <div className="services-header__info">
            <div className="services-header__title">
              <p class="head">Drop-off</p>
              <p class="sub-head">Available MON - FRI</p>
            </div>
            <ul className="services-header__list">
              <li>Just drop off your clothes and we will take care of the rest.</li>
              <li>Supplies are included. Detergent, softener, etc.</li>
              <li>The service includes washing, drying, and folding.</li>
              <li>Satisfaction Guaranteed!</li>
            </ul>
          </div>
        </div>
      <div className="services__btns">
        <div className="services__btn" onClick={() => setIsOpen1(!isOpen1)}>
          <div className="services-btn__text">By Basket</div>
          <UilAngleDown className={(isOpen1 ? "arrow-up" : "arrow-down")} size="30"/>
        </div>
        <div className={isOpen1 ? "basket__content show" : "basket__content hide"}>basket content</div>
        <div className="services__btn" onClick={() => setIsOpen2(!isOpen2)}>
          <div className="services-btn__text">By Size</div>
          <UilAngleDown className={(isOpen2 ? "arrow-up" : "arrow-down")} size="30"/>
        </div>
        <div className={isOpen2 ? "size__content show" : "size__content"}>size content</div>
      </div>
      </div>
    </section>
  )
}