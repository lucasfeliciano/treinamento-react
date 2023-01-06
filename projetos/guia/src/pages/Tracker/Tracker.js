import Cards from "../../containers/Cards";
import Total from "../../containers/Total";
import Vinyls from "../../containers/Vinyls";
import { TotalContextProvider } from "../../contexts/TotalContext";

export default function Tracker() {
  return (
    <TotalContextProvider>
      <h1>Tracker</h1>
      <Total />
      <Vinyls />
      <Cards />
    </TotalContextProvider>
  );
}
