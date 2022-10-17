import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.min.css';



// VIEWS
import Home from './views/Home';
import Account from './views/Account';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
