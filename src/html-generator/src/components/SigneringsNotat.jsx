function SigneringsNotat(props) {
  return (
    <div className="commentContainer">
        <p className="headerText">Notat til signering</p>
        <div className="commentSection">{props.kommentar}</div>
    </div>
  )
}

export default SigneringsNotat