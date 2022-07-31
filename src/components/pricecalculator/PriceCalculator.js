import { useState } from "react";
import { UilCalculator } from "@iconscout/react-unicons";
import Button from "../button/Button";
import "./pricecalculator.scss";

export default function PriceCalculator() {
	const [price, setPrice] = useState(0);
	const [weightPrice, setWeightPrice] = useState(0);
	const [sizePrice, sizeSizePrice] = useState(0);
	const [isShown, setIsShown] = useState(false);

	const calcPrice = () => {
		if (sizePrice !== 0 && weightPrice > sizePrice) {
			setPrice(sizePrice.toFixed(2))
			setIsShown(false)
		} else {
			setPrice(weightPrice.toFixed(2))
			weightPrice !== 0 && weightPrice < 35 ? setIsShown(true) : setIsShown(false)
		}
	};
	console.log(`Size: ${sizePrice}`)
	console.log(`Weight: ${weightPrice}`)
	console.log(isShown)

	return (
		<div className="calculator">
			<div className="calculator__title">Price Calculator</div>

			<div className="form">
				<label className="basket-select__label">
					Basket Price:
					<select
						value={sizePrice}
						onChange={(e) => sizeSizePrice(parseInt(e.target.value))}
						className="basket-select__input"
					>
						<option value="0">None</option>
						<option value="24">Small</option>
						<option value="34">Medium</option>
						<option value="35">Large</option>
					</select>
				</label>
				<label className="basket-weight__label">
					Basket Weight:
					<input
						className="basket-weight__input"
						type="text"
						placeholder="0"
						maxLength="6"
						min="1"
						max="999.99"
						onChange={(e) => setWeightPrice(e.target.value * 1.39)}
					/>
					lbs
				</label>
				<Button
					text="Calculate"
					onClick={calcPrice}
					icon={<UilCalculator sizePrice="20" />}
				/>
				<div className="price">Price: ${price}
				{isShown && <span className ="supplies"> + Supplies Cost.</span>}
				</div>
				<div className="warning">
					<p className="warning-label">Warning!</p>
					<p>Price is just an estimate.</p>
				</div>
			</div>
		</div>
	);
}
