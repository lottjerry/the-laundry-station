import Heading from "../components/Heading";
import FoldedClothes from '../assets/img/folded-clothes.jpg'

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
          <div className="services-header__title">Drop-off</div>
        </div>
        <div className="services-content__body">
          
        </div>
      </div>
    </section>
    
  )
}