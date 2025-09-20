import { languages } from "../languages";

export default function Languages() {
  const chips = languages.map(lang => {
    const styles = {
      color: lang.color,
      backgroundColor: lang.backgroundColor,
    }

    return <span key={lang.name} style={styles}>{lang.name}</span >
  })

  return (
    <div className="lang-grid">
      {chips}
    </div>
  )
}
