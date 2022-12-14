import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from './views/Account';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
