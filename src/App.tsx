import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminNewClient from './pages/admin/AdminNewClient';
import AdminAddProduct from './pages/admin/AdminAddProduct';
import AdminFinances from './pages/admin/AdminFinances';
import AdminInventory from './pages/admin/AdminInventory';
import AdminProducts from './pages/admin/AdminProducts';
import AdminClients from './pages/admin/AdminClients';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/products/new" element={<AdminAddProduct />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/clients/new" element={<AdminNewClient />} />
          <Route path="/admin/finances" element={<AdminFinances />} />
          <Route path="/admin/inventory" element={<AdminInventory />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
