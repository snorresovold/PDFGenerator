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
import data from "./data/data.json";

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