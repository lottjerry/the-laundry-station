import Heading from "../../components/heading/Heading";
import soap_machine from "../../assets/img/soap_machine_laptop.jpg";
import "./about.scss";
import { UilCheck } from "@iconscout/react-unicons";

export default function About() {
	return (
		<section className="about" id="about">
			<Heading
				title="About Us"
				subtitle="Get to know why we are rated 5 stars on Google."
			/>
			<div className="about__content">
				<img src={soap_machine} alt="Soap Machine" className="soap__machine" />
				<ul className="about-content__list">
					<li>
						<div className="icon">
							<UilCheck />
						</div>
						Open 24/7 365
					</li>
					<li>
						<div className="icon">
							<UilCheck />
						</div>
						Friendly Customer Service
					</li>
					<li>
						<div className="icon">
							<UilCheck />
						</div>
						Safe Location
					</li>
					<li>
						<div className="icon">
							<UilCheck />
						</div>
						20 Washers and 18 Dryers (2 Industrial Size Dryers)
					</li>
					<li>
						<div className="icon">
							<UilCheck />
						</div>
						Vending Machines, Detergent Machines, and more
					</li>
				</ul>
			</div>
		</section>
	);
}
