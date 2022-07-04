import Heading from "../components/Heading";
import FoldedClothes from '../assets/img/folded-clothes.jpg'
import Collapsible from "../components/Collapsible";

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
        <Collapsible
          label="By Basket" 
          content="Basket Content"
        />
        <Collapsible 
          label="By Size"
          content="Size Content"
        />
      </div>
      </div>
    </section>
  )
}