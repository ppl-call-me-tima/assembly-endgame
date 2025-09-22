import { useState, useRef } from "react"
import { clsx } from "clsx"

import Header from "./components/Header"
import StatusBar from "./components/StatusBar"
import Languages from "./components/Languages"

import { languages } from "./languages"
import { getRandomWord } from "./utils"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameLost || isGameWon

  const langLost = (wrongGuessCount > 0 && !currentWord.includes(guessedLetters[guessedLetters.length - 1])) ? languages[wrongGuessCount - 1].name : null

  function letterPressed(letter) {
    setGuessedLetters(prevGuessedLetters => (
      prevGuessedLetters.includes(letter) ?
        prevGuessedLetters :
        [...prevGuessedLetters, letter]
    ))
  }

  const array = currentWord.split("")
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")

  const wordRevealerChips = array.map((letter, index) => {
    const styles = {
      color: "#F9F4DA",
    }

    return (
      <span key={index} style={styles}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    )
  })

  const keyboardChips = alphabets.map(letter => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = currentWord.includes(letter)

    const className = clsx({
      unchosen: !isGuessed,
      correct: isGuessed && isCorrect,
      incorrect: isGuessed && !isCorrect,
      disabled: isGameOver,
    })

    return (
      <button
        key={letter}
        className={className}
        disabled={isGameOver}
        onClick={() => { letterPressed(letter) }}
      >{letter.toUpperCase()}</button>
    )
  })

  function resetGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  return (
    <main>
      <div className="upper-box">
        <Header />
        <StatusBar
          isGameOver={isGameOver}
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          langLost={langLost}
        />
        <Languages wrongGuessCount={wrongGuessCount} />

        <div className="word-revealer">
          {wordRevealerChips}
        </div>
      </div>

      <div className="keyboard">
        {keyboardChips}
      </div>

      {isGameOver && <button className="new-game" onClick={resetGame}>New Game</button>}
    </main>
  )
}
