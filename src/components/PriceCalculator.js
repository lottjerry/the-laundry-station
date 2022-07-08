import { useState } from "react"
import { UilCalculator } from '@iconscout/react-unicons'

export default function PriceCalculator(){
  const [price, setPrice] = useState(0)

  const calcPrice = () => {
    let num = (1.39 * 2)
    num = num.toFixed(2)
    setPrice(num)
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
          />
          lbs
        </label>
        <div className="price">
          Price: ${price}
        </div>
        <div className="button" onClick={calcPrice}>
            <div className="button__text">Calculate</div>
            <div className="icon"><UilCalculator size="20"/></div>
        </div>
      </div>
    </div>
  )
}