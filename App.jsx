import { useState } from "react"

import Header from "./components/Header"
import StatusBar from "./components/StatusBar"
import Languages from "./components/Languages"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")
  const array = currentWord.split("")

  const letterChips = array.map((letter, index) => {
    const styles = {
      color: "#F9F4DA",
    }

    return <span key={index} style={styles}>{letter.toUpperCase()}</span>
  })

  return (
    <main>
      <div className="upper-box">
        <Header />
        <StatusBar />
        <Languages />
        <div className="word-revealer">
          {letterChips}
        </div>
      </div>
    </main>
  )
}
