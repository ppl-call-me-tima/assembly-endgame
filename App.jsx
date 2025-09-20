import { useState } from "react"

import Header from "./components/Header"
import StatusBar from "./components/StatusBar"
import Languages from "./components/Languages"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")

  const array = currentWord.split("")
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")

  const wordRevealerChips = array.map((letter, index) => {
    const styles = {
      color: "#F9F4DA",
    }

    return <span key={index} style={styles}>{letter.toUpperCase()}</span>
  })

  const keyboardChips = alphabets.map((letter, index) => {
    const styles = {
      backgroundColor: "#FCBA29",
    }

    return <button key={letter} style={styles}>{letter.toUpperCase()}</button>
  })

  return (
    <main>
      <div className="upper-box">
        <Header />
        <StatusBar />
        <Languages />

        <div className="word-revealer">
          {wordRevealerChips}
        </div>
      </div>

      <div className="keyboard">
        {keyboardChips}
      </div>
    </main>
  )
}
