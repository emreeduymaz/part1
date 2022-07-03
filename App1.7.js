import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  const [goodValue, setGoodValue] = useState(0)
  const [neutralValue, setNeutralValue] = useState(0)
  const [badValue, setBadValue] = useState(0)
  const allValues = goodValue + neutralValue + badValue
  const average = (goodValue - badValue) / allValues
  const positive =  goodValue / allValues * 100

  const setToGoodValue = newValue => {
    console.log('good value now', newValue)
    setGoodValue(newValue)
  }
  const setToNeutralValue = newValue => {
    console.log('neutral value now', newValue)
    setNeutralValue(newValue)
  }
  const setToBadValue = newValue => {
    console.log('bad value now', newValue)
    setBadValue(newValue)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGoodValue(goodValue + 1)} text="good" />
      <Button handleClick={() => setToNeutralValue(neutralValue + 1)} text="neutral" />
      <Button handleClick={() => setToBadValue(badValue + 1)} text="bad" />
      <h1>statistics</h1>
      <p1>good {goodValue}</p1><br></br>
      <p1>neutral {neutralValue}</p1><br></br>
      <p1>bad {badValue}</p1><br></br>
      <p1>all {allValues}</p1><br></br>
      <p1>average {average}</p1><br></br>
      <p1>positive {positive}%</p1><br></br>
    </div>
  )
}
export default App