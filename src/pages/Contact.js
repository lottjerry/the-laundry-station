import Heading from "../components/Heading";
import { UilPhone, UilAt, UilMapMarker } from "@iconscout/react-unicons";
import Button from "../components/Button";

export default function Contact() {
	const link =
		"https://www.google.com/maps/place/The+Laundry+Station/@31.6015281,-89.2006045,18.06z/data=!4m5!3m4!1s0x889ccd5ac99e3ea7:0xb37c37ebd769f9c2!8m2!3d31.6013829!4d-89.1993865";

	const Group = (props) => {
		return (
			<div className="contact-content__group">
				{props.button}
				<div className="content-group__text">{props.text}</div>
			</div>
		);
	};

	return (
		<section className="contact" id="contact">
			<Heading
				title="Contact Us"
				subtitle="Have questions? We are here to help!"
			/>
			<div className="contact__content">
				<Group
					button={
						<Button
							href="tel:601-498-5136"
							text="Call Us"
							icon={<UilPhone size="20" />}
						/>
					}
					text="+601.498.5136"
				/>
				<Group
					button={
						<Button
							href="mailto:contact@ellisvillelaundrystation.com"
							text="Email Us"
							icon={<UilAt size="20" />}
						/>
					}
					text="contact@ellisvillelaundrystation.com"
				/>
				<Group
					button={
						<Button
							href={link}
							text="Location"
							icon={<UilMapMarker size="20" />}
							target="_blank"
							rel="noopener noreferrer"
						/>
					}
					text="201 Laurel St, Ellisville, MS 39437"
				/>
			</div>
		</section>
	);
}
