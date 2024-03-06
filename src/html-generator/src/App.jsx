import "./stylesheet.css";
import KundeInformasjon from "./components/KundeInformasjon";
import AnleggsInformasjon from "./components/AnleggsInformasjon";
import OppdragsInformasjon from "./components/OppdragsInformasjon";
import UtførtTable from "./components/UtfortTable";
import FakturaKommentar from "./components/FakturaKommentar";
import TKSSignatur from "./components/TKSSignatur";
import KundeSignatur from "./KundeSignatur";
import SigneringsNotat from "./components/SigneringsNotat";
import OppfolgingsTable from "./components/OppfolgingsTable";
import checklistpoints from "./data/checklistpoints.json";

const data = [
  {
    "KundeInformasjon": {
      "kundenummer": 12345,
      "kundenavn": "Kunde Navn AS",
      "adresse": "Gateveien 123",
      "postnummer": "1234",
      "sted": "Stedet",
      "telefon": 98765432,
      "epost": "kunde@eksempel.no",
      "kontaktperson": "Kontakt Person",
      "kontaktpersonTelefon": "87654321",
      "kontaktpersonEpost": "kontakt@eksempel.no",
      "bestillingsnummer": 54321,
      "kundeRef": "KundeRef123"
    },
    "AnleggsInformasjon": {
      "heisnummer": "Heis123",
      "beskrivelse": "Beskrivelse av anlegg",
      "adresse": "Anleggsveien 456",
      "postnummer": "5678",
      "sted": "Anleggsstedet",
      "modell": "Heismodell",
      "nyttelast": "Nyttelast",
      "antallStopp": 4,
      "løftehøyde": "Løftehøyde"
    },
    "OppdragsInformasjon": {
      "ordrenummer": "Ordre123",
      "tksMontor": "TksMontor"
    },
    "UtførtTable": {
      "tasks": []
    },
    "OppfolgingsTable": {
      "followUps": [
        {
          "oppfølging": "Følger opp kundehenvendelse",
          "jaNei": "Ja",
          "kommentar": "Kunden var fornøyd med løsningen"
        },
        {
          "oppfølging": "Sendt til teknisk avdeling",
          "jaNei": "Nei",
          "kommentar": "Teknisk problem ble løst på stedet"
        },
        {
          "oppfølging": "Planlagt oppfølgingssamtale",
          "jaNei": "Ja",
          "kommentar": "Avtalt tidspunkt for samtale neste uke"
        }
      ]
    },
    "FakturaKommentar": {
      "kommentar": "Dette er en fakturakommentar"
    },
    "TKSSignatur": {
      "navn": "Tks Signatur Navn",
      "dato": "22. februar 2024",
      "signatur": "tks-signatur"
    },
    "KundeSignatur": {
      "navn": "Kunde Signatur Navn",
      "dato": "22. februar 2024",
      "signatur": "kunde-signatur",
      "notat": "Kundens signatur og notat"
    },
    "SigneringsNotat": {
      "kommentar": "Dette er et signeringsnotat"
    }
  }  
]

function App() {
  return (
    <div>
      <h1>Ettersyn Personheis</h1>
      <KundeInformasjon {...data.KundeInformasjon} />
      <AnleggsInformasjon {...data.AnleggsInformasjon} />
      <OppdragsInformasjon {...data.OppdragsInformasjon} />
      <UtførtTable tasks={data.UtførtTable.tasks} />
      <OppfolgingsTable followUps={data.OppfolgingsTable.followUps} />
      <FakturaKommentar {...data.FakturaKommentar} />
      <TKSSignatur {...data.TKSSignatur} />
      <KundeSignatur {...data.KundeSignatur} />
      <SigneringsNotat {...data.SigneringsNotat} />
    </div>
  );
}
export default App;