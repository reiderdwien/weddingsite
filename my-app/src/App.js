import './App.css';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Gallery from './gallery';
import Games from './games';
import Gifts from './gifts';

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div style={{ textAlign: 'right' }}>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ja')}>JA</button>
      </div>
      <Navbar />

      <div style={{ textAlign: 'center', padding: '50px', background: 'pink', color: 'purple' }}>
        <Routes>
          <Route path="gallery" element={<Gallery />} />
          <Route path="games" element={<Games />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="/" element={
            <>
                <h1>{t('Welcome')}</h1>
                <p>{t('Description')}</p>
                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', display: 'inline-block', color: 'black' }}>
                  <h2>{t('TheHappyCouple')}</h2>
                  <p><strong>{t('Groom')}:</strong> Reid</p>
                  <p><strong>{t('Bride')}:</strong> Mariko</p>
                </div>
              <img src={`${process.env.PUBLIC_URL}/fish.jpg`} alt="Fish" style={{ marginTop: '50px' }} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
