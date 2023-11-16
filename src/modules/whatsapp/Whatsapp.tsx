'use client'

import React from 'react';
import { WhatsApp } from '@mui/icons-material';

const WhatsAppIcon: React.FC = () => {
  const openWhatsAppChat = () => {
    // Replace 'your-number' with your actual WhatsApp number
    window.open('https://wa.me/6285716770575?text=Halo%20Sweat%20at%20Home', '_blank');
  };

  return (
    <div
      className="whatsapp-icon"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '75px',
        height: '75px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 9999, // Ensure it appears above other content
      }}
      onClick={openWhatsAppChat}
    >
      <WhatsApp sx={{ color: 'white', fontSize: '55px' }} />
    </div>
  );
};

export default WhatsAppIcon;