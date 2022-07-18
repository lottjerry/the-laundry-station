import { useEffect, useState } from "react";
import { UilArrowUp } from "@iconscout/react-unicons";

export default function ToTopButton() {
  const [showButton, setShowButton] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

  useEffect(() => {
		window.addEventListener("scroll", () => {
      (window.pageYOffset > 300) ? setShowButton(true) : setShowButton(false)
		})
	}, [])

	return (
		<>
			{showButton && (
				<button id="back-to-top" className="button" onClick={scrollToTop}>
					<div className="icon">
						<UilArrowUp size="30" />
					</div>
				</button>
			)}
		</>
	);
}
