import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home';
import Account from './views/Account';
import NotFound from './views/NotFound';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
