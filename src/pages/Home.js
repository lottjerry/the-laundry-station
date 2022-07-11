import logo from "../assets/img/logo.png"
import { UilTelegramAlt,UilMapMarker } from "@iconscout/react-unicons"

export default function Home() {
  return (
    <section className="home" id="home">
      <img 
        src={logo} 
        alt="The Laundry Station Logo" 
        className="home__logo"
      />
      <div className="home__content">
        <div className="home__info">
          <div className="home-info__title">Open: 24/7</div>
          <ul className="home-info__list">
            <li>Locally Owned and Operated</li>
            <li>Newer Model Machines</li>
            <li>Onsite Services and More</li>
          </ul>
        </div>
        <div className="home__btns">
          <a className="button" href="#contact">
            <div className="button__text">Contact Us</div>
            <div className="icon"><UilTelegramAlt size="20"/></div>
          </a>
          <a className="button" href="https://www.google.com/maps/place/The+Laundry+Station/@31.6015281,-89.2006045,18.06z/data=!4m5!3m4!1s0x889ccd5ac99e3ea7:0xb37c37ebd769f9c2!8m2!3d31.6013829!4d-89.1993865" target="_blank" rel="noopener noreferrer">
            <div className="button__text">Location</div>
            <div className="icon"><UilMapMarker size="20"/></div>
          </a>
        </div>
      </div>
    </section>
  )
}