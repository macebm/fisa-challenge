import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Extra from "./components/Extra";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/extra">
          <Extra />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
