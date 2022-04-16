import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderNav.css';

/**
 * Component HeaderNav : header with navigation through the app .
 * @returns 
 */
function HeaderNav() {
    return (
    <nav className='headerNav'>
      <img src='./logo.png' alt='Logo'></img>
    
        <Link to="/"> Accueil</Link>
      <Link to="/profil"> Profil</Link>
      <Link to="/settingd"> Réglage</Link>
      <Link to="/community"> Communauté</Link>
   
      
    </nav>
    );
    
    
}

export default HeaderNav