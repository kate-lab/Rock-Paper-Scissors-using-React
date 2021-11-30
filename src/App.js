import React, { useState , useEffect } from 'react'
import Header from './components/Header.js'
import Results from './components/Results.js'

const App = () => {
  //functionality
  
  const [results , setResults] = useState('')

  const [choice , setChoice] = useState('')

  const [computerChoice , setComputerChoice] = useState('')

  const choices = ['Rock','Paper','Scissors']


  const handleUserChoice = (button)=>{

    //computer choice made randomly
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(computerChoice)
    //player choice defined by target innerText
    setChoice(button.target.innerHTML)
  }

  useEffect(()=>{
    //shows what happens once choices are made!

    if (computerChoice === choice && choice !== '') {
      setResults(`It's a tie! You and Computer both chose ${computerChoice}`)
    } else if (computerChoice === 'Rock') {
      if (choice === 'Paper') {
        setResults(`You win! Computer chose ${computerChoice} and you chose ${choice}. The ${choice} wraps the ${computerChoice}!`)
      } else {
        setResults(`Computer wins! It chose ${computerChoice} and you chose ${choice}. The ${computerChoice} smashes the ${choice}!`)
      }
    }  else if (computerChoice === 'Paper') {
      if (choice === 'Rock') {
        setResults(`Computer wins! It chose ${computerChoice} and you chose ${choice}. The ${computerChoice} wraps the ${choice}!`)
      } else {
        setResults(`You win! Computer chose ${computerChoice} and you chose ${choice}. The ${choice} cuts the ${computerChoice}!`) 
      }
    } else if (computerChoice === 'Scissors') {
      if (choice === 'Rock') {
        setResults(`You win! Computer chose ${computerChoice} and you chose ${choice}. The ${choice} smashes the ${computerChoice}!`)
      } else {
        setResults(`Computer wins! It ${computerChoice} and you chose ${choice}. The ${computerChoice} cuts the ${choice}!`) 
      } 
    }
  },[choice, computerChoice])


  const handleResetClick = () => {
    setResults('')
  }

  return (
    <div>
      <Header />
      <main>
        <div>
          <h5>Make your choice:</h5>
          <button className='rock' onClick={handleUserChoice}>Rock</button>
          <button className='paper' onClick={handleUserChoice}>Paper</button>
          <button className='scissors' onClick={handleUserChoice}>Scissors</button>
        </div>
        <div>
          <Results results={results}/>
        </div>
        <div>
          <button onClick={handleResetClick}>Clear results!</button>
        </div>
      </main>
    </div>
  )
}

export default App
