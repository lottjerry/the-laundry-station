import logo from "../assets/img/logo.png"

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
        </div>
      </div>
    </section>
  )
}