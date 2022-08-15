import ScrollspyNav from "react-scrollspy-nav";
import "./navbar.scss";
import { UilApps, UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const scrollToTop = () => {
		setMenuOpen(false);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<header className="header">
			<nav className="nav container" id="nav">
				<div onClick={scrollToTop} className="nav__title">
					The Laundry Station
				</div>
				<div className={"nav__menu " + (menuOpen && "show__menu")}>
					<ScrollspyNav
						scrollDuration="500"
						scrollTargetIds={["home", "about", "services", "contact"]}
						activeNavClass="active-item"
					>
						<ul
							className="nav__list grid align"
							onClick={() => setMenuOpen(false)}
						>
							<li className="nav__item">
								<a href="#home" className="nav__link active-item">
									Home
								</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link">
									About
								</a>
							</li>
							<li className="nav__item">
								<a href="#services" className="nav__link">
									Services
								</a>
							</li>
							<li className="nav__item">
								<a href="#contact" className="nav__link">
									Contact Us
								</a>
							</li>
						</ul>
						<UilTimes
							className="nav__close"
							onClick={() => setMenuOpen(false)}
						/>
					</ScrollspyNav>
				</div>
				<div className="nav__btns">
					{!menuOpen && (
						<div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
							<UilApps />
						</div>
					)}
				</div>
			</nav>
		</header>
	);
}
