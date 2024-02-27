interface KundeSignatur {
  navn: string,
  dato: string,
  signatur: string,
  notat: string
}

function KundeSignatur(props: KundeSignatur) {
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