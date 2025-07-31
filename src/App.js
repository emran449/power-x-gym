import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import OurClasses from './components/OurClasses/OurClasses/OurClasses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<OurClasses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
