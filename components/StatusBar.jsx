import { clsx } from "clsx"
import { getFarewellText } from "../utils"

export default function StatusBar(props) {
  const className = clsx(["status-bar", {
    win: props.isGameWon,
    lose: props.isGameLost,
    farewell: !props.isGameOver && props.langLost,
  }])

  return (
    <div className={className}>
      {props.isGameWon &&
        <p>
          <span style={{ fontSize: "large" }}>You win!</span>
          <br />
          <span style={{ fontSize: "small" }}>Well done!🎉</span>
        </p>
      }

      {props.isGameLost &&
        <p>
          <span style={{ fontSize: "large" }}>Game over!</span>
          <br />
          <span style={{ fontSize: "small" }}>You lose! Better start learning Assembly 😭</span>
        </p>
      }

      {!props.isGameOver && props.langLost &&
        <p>{getFarewellText(props.langLost)}</p>
      }
    </div>
  )
}
