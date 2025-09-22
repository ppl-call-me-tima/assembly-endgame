import { useState } from "react"
import { clsx } from "clsx"

import Header from "./components/Header"
import StatusBar from "./components/StatusBar"
import Languages from "./components/Languages"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

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
    })

    return (
      <button
        key={letter}
        className={className}
        onClick={() => { letterPressed(letter) }}
      >{letter.toUpperCase()}</button>
    )
  })

  return (
    <main>
      <div className="upper-box">
        <Header />
        <StatusBar />
        <Languages wrongGuessCount={wrongGuessCount} />

        <div className="word-revealer">
          {wordRevealerChips}
        </div>
      </div>

      <div className="keyboard">
        {keyboardChips}
      </div>

      <button className="new-game">New Game</button>
    </main>
  )
}
