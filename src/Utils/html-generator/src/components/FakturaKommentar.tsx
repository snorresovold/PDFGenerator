interface KommentarProps {
  kommentar: string;
}

function FakturaKommentar(props: KommentarProps) {
  return (
    <div className="commentContainer">
      <p className="headerText">Fakturakommentar</p>
      <div className="commentSection">{props.kommentar}</div>
    </div>
  )
}

export default FakturaKommentar
