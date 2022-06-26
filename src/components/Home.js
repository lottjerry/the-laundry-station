import logo from "../assets/img/logo.png"
import Button from "./Button"
import telegram from "../assets/img/telegram-alt.svg"

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
          <Button text="Contact Us" src={telegram} alt="Telegram Icon"/>
        </div>
      </div>
    </section>
  )
}