import { clsx } from "clsx";
import { languages } from "../languages";

export default function Languages(props) {
  const chips = languages.map((lang, index) => {
    const styles = {
      color: lang.color,
      backgroundColor: lang.backgroundColor,
    }

    const isLangLost = index < props.wrongGuessCount
    const className = clsx(["lang-chip", isLangLost && "lost"])

    return (
      <span
        className={className}
        key={lang.name}
        style={styles}>{lang.name}</span >
    )
  })

  return (
    <div className="lang-grid">
      {chips}
    </div>
  )
}
