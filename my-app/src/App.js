import './App.css';

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Gallery from './gallery';
import Games from './games';
import Gifts from './gifts';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '50px', background: 'pink', color: 'purple' }}>
        <Routes>
          <Route path="gallery" element={<Gallery />} />
          <Route path="games" element={<Games />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="/" element={
            <>
              <h1>Welcome to Reid & Mariko's Wedding Website!</h1>
              <p style={{ fontSize: '24px', margin: '50px auto', maxWidth: '600px' }}>
                We're so excited to celebrate our special day with all our friends and family.
                This website will provide all the details about our wedding. So stay tuned!
              </p>
              <div style={{ background: 'white', padding: '20px', borderRadius: '10px', display: 'inline-block', color: 'black' }}>
                <h2>The Happy Couple</h2>
                <p><strong>Groom:</strong> Reid</p>
                <p><strong>Bride:</strong> Mariko</p>
              </div>
              <img src={`${process.env.PUBLIC_URL}/fish.png`} alt="Pixel Art Fish" style={{ marginTop: '50px' }} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
