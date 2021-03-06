import Heading from "../../components/heading/Heading";
import FoldedClothes from "../../assets/img/folded-clothes.jpg";
import PriceCalculator from "../../components/pricecalculator/PriceCalculator";
import "./services.scss";

export default function Services() {
	return (
		<section className="services" id="services">
			<Heading
				title="Services"
				subtitle="Professional service for all your laundry needs."
			/>
			<div className="services__content">
				<div className="services-content__header">
					<img
						src={FoldedClothes}
						alt="Folded Clothes"
						className="services-header__img"
					/>
					<div className="services-header__info">
						<div className="services-header__title">
							<p className="head">Drop-off</p>
							<p className="sub-head">Available MON - FRI</p>
						</div>
						<ul className="services-header__list">
							<li>
								Just drop off your clothes and we will take care of the rest.
							</li>
							<li>Supplies are included. Detergent, softener, etc.</li>
							<li>The service includes washing, drying, and folding.</li>
							<li>Satisfaction Guaranteed!</li>
						</ul>
					</div>
				</div>
				<div className="services__prices">
					<div className="services-prices__title">Prices</div>
					<div className="services-prices__description">
						Prices are by the basket or $1.39lb. We will charge you for the
						lowest price option. To give you an idea, if you have a large basket
						with a few comforters in it, the price by the basket will at least
						be $35. Therefore, we will charge by the pound because the basket
						might not weight no more than 10 pounds which will save you money.
						Use our price calculator to get a estimate of how much a basket of
						clothes will cost you.
					</div>
					<div className="services-prices__breakdown">
						<div className="breakdown__details">
							<div className="breakdown__title">Price Breakdown</div>
							<div className="breakdown__subtitle">
								By the basket or $1.39lb
							</div>
							<ul className="breakdown__list">
								<li className="small">
									<p>Small Basket</p>
									<p>$0 to $24</p>
								</li>
								<li className="medium">
									<p>Medium Basket</p>
									<p>$25 to $34</p>
								</li>
								<li className="large">
									<p>Large Basket</p>
									<p>$35 and Up</p>
								</li>
							</ul>
						</div>
						<PriceCalculator />
					</div>
				</div>
			</div>
		</section>
	);
}
