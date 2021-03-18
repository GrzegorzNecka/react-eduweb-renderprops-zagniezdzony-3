import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Docs from "./views/Docs.js";
import Tips from "./views/Tips.js";
import Patterns from "./views/Patterns.js";
import Components from "./views/Components.js";

import ItemsList from "./components/ItemsList/ItemsList";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/" exact component={Docs} />
        <Route path="/tips" exact component={Tips} />
        <Route path="/patterns" exact component={Patterns} />
        <Route path="/components" exact component={Components} />
      </div>
    </Router>
  );
}

export default App;

//https://github.com/eduwebpl/kurs-react-techniki-zaawansowane/tree/02.2
//https://eduweb.pl/programowanie-i-www/reactjs/react-techniki-zaawansowane/hoc---komponent-blizniaczy
