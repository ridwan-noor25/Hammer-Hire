import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RequestForm from './components/RequestForm'
import Admin from './components/Admin'
import SuperAdmin from './components/SuperAdmin';


import './App.css';
import SignupForm from './components/RequestForm';



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/request" element={<RequestForm />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/superadmin" element={<SuperAdmin />} />
              
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;