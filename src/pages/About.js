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
      </div>
    </section>
  )
}