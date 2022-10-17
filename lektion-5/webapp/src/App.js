import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Settings from './views/Settings';
import NewProductForm from './views/products/NewProductForm';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/products/new" element={<NewProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
