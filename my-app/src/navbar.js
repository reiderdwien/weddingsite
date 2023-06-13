import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './navbar.css';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <Link to="/">{t('Home')}</Link> |
      <Link to="/gallery">{t('Gallery')}</Link> |
      <Link to="/games">{t('Games')}</Link> |
      <Link to="/gifts">{t('Gifts')}</Link>
    </nav>
  );
};

export default Navbar;