import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage';
import ColorSelection from './pages/ColorSelection';
import TopSelection from './pages/TopSelection';
import BottomSelection from './pages/BottomSelection';
import ShoesSelection from './pages/ShoesSelection';
import AccessorySelection from './pages/AccessorySelection';
import FinishPage from './pages/FinishPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/color-selection" component={ColorSelection} />
        <Route path="/top-selection" component={TopSelection} />
        <Route path="/bottom-selection" component={BottomSelection} />
        <Route path="/shoes-selection" component={ShoesSelection} />
        <Route path="/accessory-selection" component={AccessorySelection} />
        <Route path="/finish" component={FinishPage} />
      </Switch>
    </Router>
  );
}

export default App;