function TKSSignatur(props) {

  function removeFirstAndLast(str) {
    if (str.length >= 2) {
        return str.substring(1, str.length - 1);
    } else {
        return str;
    }
  }
  
return (
    <div className="dataContainer">
      <p className="headerText">Signatur TKS Heis</p>
      <p>Navn: {props.navn}</p>
      <p>Dato: {props.dato}</p>
      <p>Signatur: </p>
      <img src={removeFirstAndLast(props.signatur)}/>
    </div>
  );
}

export default TKSSignatur;