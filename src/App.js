import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/color-selection" element={<ColorSelection />} />
        <Route path="/top-selection" element={<TopSelection />} />
        <Route path="/bottom-selection" element={<BottomSelection />} />
        <Route path="/shoes-selection" element={<ShoesSelection />} />
        <Route path="/accessory-selection" element={<AccessorySelection />} />
        <Route path="/finish" element={<FinishPage />} />
      </Routes>
    </Router>
  );
}

export default App;