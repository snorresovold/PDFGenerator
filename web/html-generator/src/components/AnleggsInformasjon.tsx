interface AnleggsInformasjon {
    heisnummer: string;
    beskrivelse: string;
    adresse: string;
    postnummer: string;
    sted: string;
    modell: string;
    nyttelast: string;
    antallStopp: number;
    løftehøyde: string;
}
  
function AnleggsInformasjon(props: AnleggsInformasjon) {
  return (
    <div className="dataContainer">
      <p className="headerText">Anleggsinformasjon</p>
      <p>Heisnummer: {props.heisnummer}</p>
      <p>Beskrivelse: {props.beskrivelse}</p>
      <p>Adresse: {props.adresse}</p>
      <p>Postnummer: {props.postnummer}</p>
      <p>Sted: {props.sted}</p>
      <br />
      <p>Modell: {props.modell}</p>
      <p>Nyttelast: {props.nyttelast}</p>
      <p>Antall stopp: {props.antallStopp}</p>
      <p>Løftehøyde: {props.løftehøyde}</p>
    </div>
  )
}

export default AnleggsInformasjon