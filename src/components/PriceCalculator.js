import { useState } from "react"

export default function PriceCalculator(){
  const [pointsGiven, setPointsGiven] = useState(0);
  const [pointsPossible, setPointsPossible] = useState(0);
  const [price, setPrice] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +pointsGiven >= 0 && +pointsPossible > 0;
    if (!formValid) {
      return;
    }
    setPrice((+pointsGiven / +pointsPossible) * 100);
  };

  return (
    <div className="App">
      <form onSubmit={calculate}>
        <div>
          <label>points given</label>
          <input
            value={pointsGiven}
            onChange={(e) => setPointsGiven(e.target.value)}
          />
        </div>
        <div>
          <label>points possible</label>
          <input
            value={pointsPossible}
            onChange={(e) => setPointsPossible(e.target.value)}
          />
        </div>
        <button type="submit">calculate</button>
      </form>
      <div>${price}</div>
    </div>
  )
}