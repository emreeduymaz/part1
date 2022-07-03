import { useState } from 'react'
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  const [goodValue, setGoodValue] = useState(0)
  const [neutralValue, setNeutralValue] = useState(0)
  const [badValue, setBadValue] = useState(0)

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
      <p1>Good <Display value={goodValue} /></p1>
      <p1>Neutral <Display value={neutralValue} /></p1>
      <p1>Bad <Display value={badValue} /></p1>
    </div>
  )
}
export default App