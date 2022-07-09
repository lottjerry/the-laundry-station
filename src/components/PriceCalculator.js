import { useState } from "react"
import { UilCalculator } from '@iconscout/react-unicons'

export default function PriceCalculator(){
  const [price, setPrice] = useState(0)
  const[weight, setWeight] = useState(0)
  const[size, setSize] = useState(0)

  const calcPrice = () => {
    let totalPrice = (1.39 * weight).toFixed(2)
    setPrice(totalPrice)
  }

  return (
    <div className="calculator">
      <div className="calculator__title">Price Calculator</div>
      
      <div className="form">
        <label className="basket-weight__label">Basket Weight: 
          <input 
            className="basket-weight__input"
            type="text" 
            placeholder="0"
            maxlength="3"
            min="1"
            max="999"
            onChange={e => setWeight(e.target.value)}
          />
          lbs
        </label>
        <label className="basket-select__label">
          Basket Size:
          <select value={size} onChange={e => setSize(e.target.value)}className="basket-select__input">
            <option value="24">Small</option>
            <option value="34">Medium</option>
            <option value="35">Large</option>
          </select>
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