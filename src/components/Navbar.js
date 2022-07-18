import ScrollspyNav from "react-scrollspy-nav";

export default function Navbar() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	
	return (
		<nav className="nav" id="nav">
			<div onClick={scrollToTop} className="nav__title">
				The Laundry Station
			</div>
			<ScrollspyNav
				scrollDuration="500"
				scrollTargetIds={["home", "about", "services", "contact"]}
				activeNavClass="active-item"
			>
				<ul className="nav__list">
					<li>
						<a href="#home" className="nav__item active-item">
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="nav__item">
							About
						</a>
					</li>
					<li>
						<a href="#services" className="nav__item">
							Services
						</a>
					</li>
					<li>
						<a href="#contact" className="nav__item">
							Contact Us
						</a>
					</li>
				</ul>
			</ScrollspyNav>
		</nav>
	);
}
