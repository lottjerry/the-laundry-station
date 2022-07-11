import Heading from "../components/Heading";
import { UilPhone, UilAt, UilMapMarker } from '@iconscout/react-unicons'

export default function Contact () {
  return(
    <section className="contact" id="contact">
      <Heading title="Contact Us" subtitle="Have questions? We are here to help!"/>
      <div className="contact__content">
        <div className="contact-content__group">
          <a className="button" href="tel:601-498-5136">
            <div className="button__text">Call Us</div>
            <div className="button__icon"><UilPhone size="20"/></div>
          </a>
          <div className="content-group__text">+601.498.5136</div>
        </div>
        <div className="contact-content__group">
          <a className="button" href="mailto:contact@ellisvillelaundrystation.com">
            <div className="button__text">Email Us</div>
            <div className="button__icon"><UilAt size="20"/></div>
          </a>
          <div className="content-group__text">contact@ellisvillelaundrystation.com</div>
        </div>
        <div className="contact-content__group">
          <a className="button" href="https://www.google.com/maps/place/The+Laundry+Station/@31.6015281,-89.2006045,18.06z/data=!4m5!3m4!1s0x889ccd5ac99e3ea7:0xb37c37ebd769f9c2!8m2!3d31.6013829!4d-89.1993865" target="_blank" rel="noopener noreferrer">
            <div className="button__text">Location</div>
            <div className="button__icon"><UilMapMarker size="20"/></div>
          </a>
          <div className="content-group__text">201 Laurel St, Ellisville, MS 39437</div>
        </div>
      </div>
    </section>
  )
}