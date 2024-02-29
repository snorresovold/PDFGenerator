function KundeSignatur(props) {
  return (
    <div className="dataContainer">
        <p className="headerText">Signatur Kunde</p>
        <p>Navn: {props.navn}</p>
        <p>Dato: {props.dato}</p>
        <p>Signatur: {props.signatur}</p>
    </div>
  )
}

export default KundeSignatur