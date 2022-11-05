import { GlobalContextProvider } from "./context/GlobalContext";
import AddressForm from "./components/AddressForm";
import Map from "./components/Map";

function App() {
  return (
    <GlobalContextProvider>
      <AddressForm />
      <main className="w-full">
        <Map />
      </main>
    </GlobalContextProvider>
  );
}

export default App;
