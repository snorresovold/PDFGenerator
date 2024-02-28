function FakturaKommentar(props) {
  return (
    <div className="commentContainer">
      <p className="headerText">Fakturakommentar</p>
      <div className="commentSection">{props.kommentar}</div>
    </div>
  )
}

export default FakturaKommentar
