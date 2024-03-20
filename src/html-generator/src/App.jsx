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
  try {
    return (
      <div>
        <h1>Ettersyn Personheis</h1>
          {data.KundeInformasjon && <KundeInformasjon {...data.KundeInformasjon} />}
          {data.AnleggsInformasjon && <AnleggsInformasjon {...data.AnleggsInformasjon} />}
          {data.OppdragsInformasjon && <OppdragsInformasjon {...data.OppdragsInformasjon} />}
          {data.UtførtTable && <UtførtTable tasks={data.UtførtTable.tasks} />}
          {data.OppfolgingsTable && <OppfolgingsTable followUps={data.OppfolgingsTable.followUps} />}
          {data.FakturaKommentar && <FakturaKommentar {...data.FakturaKommentar} />}
          {data.TKSSignatur && <TKSSignatur {...data.TKSSignatur} />}
          {data.KundeSignatur && <KundeSignatur {...data.KundeSignatur} />}
          {data.SigneringsNotat && <SigneringsNotat {...data.SigneringsNotat} />}
      </div>
    );
  } catch {
    return (<h1>wrong json format</h1>)
  }

}
export default App;