import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import OurClasses from './components/OurClasses/OurClasses/OurClasses';
import AdvancedGym from './components/OurClasses/AdvancedGym/AdvancedGym/AdvancedGym';
import Pricing from './components/Pricing/Pricing/Pricing';
import Membership from './components/Membership/Membership/Membership';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<OurClasses />} />
        <Route path="/advanced-gym" element={<AdvancedGym />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/membership-1" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
