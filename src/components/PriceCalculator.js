import { useState } from "react"
import { UilCalculator } from '@iconscout/react-unicons'

export default function PriceCalculator(){
  const [price, setPrice] = useState(0)
  const[weight, setWeight] = useState(0)
  const[size, setSize] = useState(0)


  const calcPrice = () => {
    let weightPrice = 1.39 * weight
    let totalPrice 
    let sizePrice
    
    switch (size) {
      case "small":
        sizePrice = 24
        break
      case "medium":
        sizePrice = 34
        break
      case "large":
        sizePrice = 35
        break 
      default:
        sizePrice = weightPrice
        break
    }

    if (weightPrice > sizePrice) {
      totalPrice = sizePrice
    } else {
      totalPrice = weightPrice
    }
    
    setPrice(totalPrice.toFixed(2))
  }

  return (
    <div className="calculator">
      <div className="calculator__title">Price Calculator</div>
      
      <div className="form">
        <label className="basket-select__label">
          Basket Size:
          <select value={size} onChange={e => setSize(e.target.value)}className="basket-select__input">
            <option value="none">None</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label className="basket-weight__label">Basket Weight: 
          <input 
            className="basket-weight__input"
            type="text" 
            placeholder="0"
            maxlength="6"
            min="1"
            max="999.99"
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