interface AssignmentInformation {
  ordrenummer: string;
  tksMontor: string;
}

function OppdragsInformasjon(props: AssignmentInformation) {
  return (
    <div className="dataContainer">
      <p className="headerText">Oppdragsinformasjon</p>
      <p>Ordrenummer: {props.ordrenummer}</p>
      <p>TKS Montør: {props.tksMontor}</p>
    </div>
  );
}

export default OppdragsInformasjon