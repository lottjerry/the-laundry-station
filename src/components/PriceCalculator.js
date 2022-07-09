import { useState } from "react"
import { UilCalculator } from '@iconscout/react-unicons'

export default function PriceCalculator(){
  const [price, setPrice] = useState(0)
  const[weight, setWeight] = useState(0)

  const calcPrice = () => {
    let totalPrice = (1.39 * weight).toFixed(2)
    setPrice(totalPrice)
  }

  return (
    <div className="calculator">
      <div className="calculator__title">Price Calculator</div>
      
      <div className="form">
        <label className="basket__label">Basket Weight: 
          <input 
            className="basket__input"
            type="text" 
            placeholder="0"
            maxlength="3"
            min="1"
            max="999"
            onChange={e => setWeight(e.target.value)}
          />
          lbs
        </label>
        <div className="button" onClick={calcPrice}>
            <div className="button__text">Calculate</div>
            <div className="icon"><UilCalculator size="20"/></div>
        </div>
        <div className="price">
          Price: ${price}
        </div>
      </div>
    </div>
  )
}