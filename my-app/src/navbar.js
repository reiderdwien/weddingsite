import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: 'purple', padding: '10px' }}>
      <Link style={{ margin: '10px', color: 'white' }} to="/">Home</Link>
      <Link style={{ margin: '10px', color: 'white' }} to="/gallery">Gallery</Link>
      <Link style={{ margin: '10px', color: 'white' }} to="/games">Games</Link>
      <Link style={{ margin: '10px', color: 'white' }} to="/gifts">Gifts</Link>
    </nav>
  );
}