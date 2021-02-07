import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import {Earthquakes} from "./demos";

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/earthquakes">Earthquakes</Link></li>
      </ul>
      <Switch>
        <Route path="/earthquakes">
          <Earthquakes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
