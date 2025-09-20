import React from "react"

import Header from "./components/Header"
import StatusBar from "./components/StatusBar"
import Languages from "./components/Languages"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = React.useState("react")
  const array = currentWord.split("")

  

  return (
    <main>
      <div className="upper-box">
        <Header />
        <StatusBar />
        <Languages />
      </div>
    </main>
  )
}
