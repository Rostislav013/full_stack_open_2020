import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  return(
    <div>
      <table>
      <tbody>
        <tr>
          <td>{text}:</td>
          <td>{value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
};

const Statistics = ({good, neutral, bad}) => {
  if((good + neutral + bad) > 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <Statistic text="Good" value ={good} />
        <Statistic text="Neutral" value ={neutral} />
        <Statistic text="Bad" value ={bad} />
        <Statistic text="All" value ={good + neutral + bad} />
        <Statistic text="Average" value ={((good + neutral + bad)/3).toFixed(2)} />
        <Statistic text="Positive" value ={`${((good / (good + bad + neutral))*100).toFixed(2)} %`} />
        </div>
      )
  };
  return (
    <div>
      <p>No feedback given</p>
    </div>
  );
};

const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
