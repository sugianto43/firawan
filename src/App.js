import "./App.css";
import { Route, Switch } from "react-router";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Table from "./components/table/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Cards />
        </Route>
        <Route path="/detail/:id">
          <Table />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
