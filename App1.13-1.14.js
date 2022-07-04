import { useState } from "react";


const Button = (props) => (
  
   <button onClick={props.handleClick}>{props.text}</button>
);

const Anectode = ({anecdote, score}) => {
  return (
    <>
    <div>{anecdote}</div>
    <div>has {score} votes</div>
    </>
  )
}
const Winner = ({anecdotes, scores}) => {
  if (scores.reduce((a, b) => a + b, 0) > 0) {
    const winner = scores.indexOf(Math.max(...scores))
    return <Anectode anecdote={anecdotes[winner]} score={scores[winner]} />
  }
  else {
    return <div>No votes given.</div>
  }
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const selectRandomAnecdote = () => {
    const rand = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(rand);
  }
   
  const [selected, setSelected] = useState(0)
  const [scores, setScores] = useState(Array(anecdotes.length).fill(0))

  const voteForAnecdote = () => {
    const _scores = [...scores];
    _scores[selected] += 1;
    setScores(_scores);
  }

  return (
    <div>
      <h1>Anectode of the Day</h1>
      <Anectode anecdote={anecdotes[selected]} score = {scores[selected]}/>
      <Button handleClick={voteForAnecdote} text="vote"  />
      <Button handleClick={selectRandomAnecdote} text="next anectode"  />
      <h1>Anectode with most votes</h1>
      <Winner anecdotes={anecdotes} scores={scores} />
      
    </div>
  )
}

export default App

