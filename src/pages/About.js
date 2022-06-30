import Heading from "../components/Heading";
import soap_machine from "../assets/img/soap_machine_laptop.jpg"

export default function About(){
  return (
    <section className="about" id="about">
      <Heading title="About Us"subtitle="Get to know why we are rated 5 stars on Google."/>
      <div className="about__content">
        <img 
        src={soap_machine} 
        alt="Soap Machine" 
        className="soap__machine"
        />
        <ul className="about-content__list">
          <li>Open 24/7 365</li>
          <li>Friendly Customer Service</li>
          <li>Safe Location</li>
          <li>20 Wahsers and 18 Dryers (2 Industrial Size Dryers)</li>
          <li>Vending Machines, Detergent Machines, and more</li>
        </ul>
      </div>
    </section>
  )
}