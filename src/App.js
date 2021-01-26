import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
