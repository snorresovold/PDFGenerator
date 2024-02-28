interface KundeInformasjon {
    kundenummer: number;
    kundenavn: string;
    adresse: string;
    postnummer: string;
    sted: string;
    telefon: number;
    epost: string;
    kontaktperson: string;
    kontaktpersonTelefon: string;
    kontaktpersonEpost: string;
    bestillingsnummer: number;
    kundeRef: string;
}

function KundeInformasjon(kundeinfo: KundeInformasjon) {
  return (
      <div className="dataContainer">
        <p className="headerText">Kundeinformasjon</p>
        <p>Kundenummer: {kundeinfo.kundenummer}</p>
        <p>Kundenavn: {kundeinfo.kundenavn}</p>
        <p>Adresse: {kundeinfo.adresse}</p>
        <p>Postnummer: {kundeinfo.postnummer}</p>
        <p>Sted: {kundeinfo.sted}</p>
        <p>Telefon: {kundeinfo.telefon}</p>
        <p>E-post: {kundeinfo.epost}</p>
        <br />
        <p>Kontaktperson: {kundeinfo.kontaktperson}</p>
        <p>Telefon: {kundeinfo.telefon}</p>
        <p>E-post: {kundeinfo.epost}</p>
        <br />
        <p>Best. nummer: {kundeinfo.bestillingsnummer}</p>
        <p>Kunde ref: {kundeinfo.kundeRef}</p>
      </div>
  );
}

export default KundeInformasjon;
