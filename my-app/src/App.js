import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', background: 'pink', color: 'purple' }}>
      <h1>Welcome to Reid & Mariko's Wedding Website!</h1>
      <p style={{ fontSize: '24px', margin: '50px auto', maxWidth: '600px' }}>
        We're so excited to celebrate our special day with all our friends and family.
        This website will provide all the details about our wedding. So stay tuned!
      </p>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', display: 'inline-block', color: 'black' }}>
        <h2>The Happy Couple</h2>
        <p>
          <strong>Groom:</strong> Reid
        </p>
        <p>
          <strong>Bride:</strong> Mariko
        </p>
      </div>
    </div>
  );
}

export default App;
