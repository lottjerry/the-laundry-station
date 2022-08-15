import { useEffect, useState } from "react";
import { UilArrowUp } from "@iconscout/react-unicons";
import "./totopbutton.scss";

export default function ToTopButton() {
	const [showButton, setShowButton] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
		});
	}, []);

	return (
		<>
			{showButton && (
				<button
					className={showButton ? "scroll-btn show-scroll" : "scroll-btn"}
					onClick={scrollToTop}
				>
					<div className="icon">
						<UilArrowUp size="30" />
					</div>
				</button>
			)}
		</>
	);
}
