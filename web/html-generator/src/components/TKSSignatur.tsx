interface TKSSignatureProps {
  navn: string;
  dato: string;
  signatur: string;
}

function TKSSignatur(props: TKSSignatureProps) {
  return (
    <div className="dataContainer">
      <p className="headerText">Signatur TKS Heis</p>
      <p>Navn: {props.navn}</p>
      <p>Dato: {props.dato}</p>
      <p>Signatur: {props.signatur}</p>
    </div>
  );
}

export default TKSSignatur;
