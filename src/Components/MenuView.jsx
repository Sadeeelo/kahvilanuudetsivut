import React from 'react';
import menuImage from '../Images/uusimenu.jpg';

const MenuView = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <img src={menuImage} alt="Menu" style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
);

export default MenuView;
