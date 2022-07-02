import Heading from "../components/Heading";
import FoldedClothes from '../assets/img/folded-clothes.jpg'
import { UilAngleDown } from '@iconscout/react-unicons'

export default function Services() {
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
          <div className="services-header__title">
            <p class="center">Drop-off</p>
            <p>Available MON - FRI</p>
          </div>
        </div>
        <div className="services__btns">
          <div className="services__btn">
            <div className="services-btn__text">By Basket</div>
            <div className="arrow"><UilAngleDown size="30"/></div>
          </div>
          <div className="services__btn">
            <div className="services-btn__text">By Size</div>
            <div className="arrow"><UilAngleDown size="30"/></div>
          </div>
        </div>
      </div>
    </section>
    
  )
}