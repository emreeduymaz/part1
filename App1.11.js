import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ goodValue, neutralValue, badValue }) => {
  const allValues = goodValue + neutralValue + badValue;
  const average = (goodValue - badValue) / allValues;
  const positive = (goodValue / allValues) * 100;
  if (allValues === 0) {
    return <div>No Feedback Given</div>;
  } else {
    return (
      // <div>
      //   good {goodValue}<br></br>
      //   neutral {neutralValue}<br></br>
      //   bad {badValue}<br></br>
      //   all {allValues}<br></br>
      //   average {average}<br></br>
      //   positive {positive}%<br></br>
      // </div>
      <div>
        <StatisticLine text="good" value={goodValue} />
        <StatisticLine text="neutral" value={neutralValue} />
        <StatisticLine text="bad" value={badValue} />
        <StatisticLine text="all" value={allValues} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(2) + '%'} />
      </div>
    );
  }
};

const App = () => {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  const setToGoodValue = (newValue) => {
    console.log("good value now", newValue);
    setGoodValue(newValue);
  };
  const setToNeutralValue = (newValue) => {
    console.log("neutral value now", newValue);
    setNeutralValue(newValue);
  };
  const setToBadValue = (newValue) => {
    console.log("bad value now", newValue);
    setBadValue(newValue);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGoodValue(goodValue + 1)} text="good" />
      <Button
        handleClick={() => setToNeutralValue(neutralValue + 1)}
        text="neutral"
      />
      <Button handleClick={() => setToBadValue(badValue + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics
        goodValue={goodValue}
        neutralValue={neutralValue}
        badValue={badValue}
      />
    </div>
  );
};
export default App;
