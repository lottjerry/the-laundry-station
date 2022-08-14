import ScrollspyNav from "react-scrollspy-nav";
import "./navbar.scss";
import { UilApps, UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";

export default function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const scrollToTop = () => {
		setClick(false);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<nav className="nav" id="nav">
			<div onClick={scrollToTop} className="nav__title">
				The Laundry Station
			</div>
			<div className="menu__icon" onClick={handleClick}>
				{click ? <UilTimes /> : <UilApps />}
			</div>
			<ScrollspyNav
				scrollDuration="500"
				scrollTargetIds={["home", "about", "services", "contact"]}
				activeNavClass="active-item"
			>
				<ul className={click ? "nav__menu active" : "nav__menu"}>
					<li className="nav__item">
						<a
							href="#home"
							className="nav__link active-item"
							onClick={closeMobileMenu}
						>
							Home
						</a>
					</li>
					<li className="nav__item">
						<a href="#about" className="nav__link" onClick={closeMobileMenu}>
							About
						</a>
					</li>
					<li className="nav__item">
						<a href="#services" className="nav__link" onClick={closeMobileMenu}>
							Services
						</a>
					</li>
					<li className="nav__item">
						<a href="#contact" className="nav__link" onClick={closeMobileMenu}>
							Contact Us
						</a>
					</li>
				</ul>
			</ScrollspyNav>
		</nav>
	);
}
