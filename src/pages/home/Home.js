import logo from "/Users/lottj/the-laundry-station/src/assets/img/logo.png"
import { UilTelegramAlt,UilMapMarker } from "@iconscout/react-unicons"

export default function Home() {
  return (
    <section className="home section" id="home">
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
          <div className="button">
            <div className="button__text">Contact Us</div>
            <div className="icon"><UilTelegramAlt size="20"/></div>
          </div>
          <div className="button">
            <div className="button__text">Directions</div>
            <div className="icon"><UilMapMarker size="20"/></div>
          </div>
        </div>
      </div>
    </section>
  )
}