import { useEffect, useState } from 'react'
import PuzzleWord from "./PuzzleWord"
import Form from "./Form"
import GussedLetters from "./GuessedLetters"
import "./App.css"

const words = 'ant baboon badger bat bear beaver camel cat clam cobra cougar coyote crow deer dog donkey duck eagle ferret fox frog goat goose hawk lion lizard llama mole monkey moose mouse mule newt otter owl panda parrot pigeon python rabbit ram rat raven rhino salmon seal shark sheep skunk sloth snake spider stork swan tiger toad trout turkey turtle weasel whale wolf wombat zebra'.split(" ")
console.log(words)
function App() {
  const [puzzle, setPuzzle] = useState(words[Math.floor(Math.random() * words.length)])
  const [guessedLetters, setGuessedLetters] = useState([])

  const guessLetter = (e) => {
    e.preventDefault()
    const ltr = e.target[0].value;
    if (guessedLetters.includes(ltr)) {
      alert("You already guessed that letter")
    } else {
      setGuessedLetters(prevGuessed => ([...prevGuessed, ltr]))
    }
  }

  const checkForWin = () => {
    for (let ltr of puzzle) {
      if (!guessedLetters.includes(ltr)) {
        return false;
      }
    }
    return true;
  }

  const checkForLoss = () => {
    const notInWord = guessedLetters.filter((ltr) => !puzzle.includes(ltr))
    if (notInWord.length > 6) {
      return true;
    }
    return false;
  }


  useEffect(() => {
    if (checkForLoss()) {
      alert(`You have lost, too many guesses. The word was ${puzzle}`)
      setPuzzle(words[Math.floor(Math.random() * words.length)])
      setGuessedLetters([])
    } else if (checkForWin()) {
      alert(`You won, the word was ${puzzle}`)
      setPuzzle(words[Math.floor(Math.random() * words.length)])
      setGuessedLetters([])
    }
  }, [guessedLetters])

  return (
    <div className="container">
      <PuzzleWord puzzleString={puzzle} guessed={guessedLetters} />
      <Form handleSubmit={guessLetter} />
      <GussedLetters puzzleString={puzzle} guessed={guessedLetters} />

    </div>
  )
}

export default App
