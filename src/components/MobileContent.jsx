import React from 'react';
import logo from "../img/logo-elite.png";
import "./MobileContent.css";

export default function MobileContent() {
  return (
      <div className="mobile-content">
          <div className='logo'>
              <img src={ logo } alt="Logo Club Elite" />
          </div>
          <div className="mobile-message">
              <h2>Este contenido es solo para celulares</h2>
              <p>Escanea el QR de tu mesa para visualizarlo en tu dispositivo móvil.</p>
          </div>
      </div>
  );
}
