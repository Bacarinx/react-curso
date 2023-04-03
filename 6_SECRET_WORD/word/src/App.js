//CSS
import './App.css';

//REACT
import { useCallback, useEffect, useState } from "react"

//data
import {wordsList} from './data/words'

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//criando as 3 partes do game
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

  

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name) //criando a variável para mudar para cada etapa do game

  const [words] = useState(wordsList) //setando as palavras do jogo em um hook useState

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    //pick a random Word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  }

  //starts the secret word Game
  const startGame = () => { 
    //pick Word and pick category
    const {word, category} = pickWordAndCategory()

    //create an array of letters
    let wordLetters = word.split("")
    
    //Deixando todas as letras em lower Case
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = (letter) => {
    console.log(letter)
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }
  

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && 
      <Game verifyLetter={verifyLetter} 
      pickedWor={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
