import "./App.css";
import AllRouter from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRouter />
      <Footer />
    </div>
  );
}

export default App;
