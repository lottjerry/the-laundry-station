import ScrollspyNav from "react-scrollspy-nav";


export default function Header() {
  return ( 
    <header className="header" id="header">
      <nav className="nav" id="nav">
        <a href="#" className="nav__title">The Laundry Station</a>
        <ScrollspyNav
        scrollDuration="500"
        scrollTargetIds={ ['home', 'about', 'services', 'contact'] } 
        activeNavClass="active-item">
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__item active-item">Home</a>
            </li>
            <li>
              <a href="#about" className="nav__item">About</a>
            </li>
            <li>
              <a href="#services" className="nav__item">Services</a>
            </li>
            <li>
              <a href="#contact" className="nav__item">Contact Us</a>
            </li>
          </ul>
        </ScrollspyNav>
      </nav>
    </header>
  )
}