import React from 'react';

export default function Footer() {
  const footerStyle = {
    position: 'fixed',
    width: '100%',
    bottom: '0',
    backgroundColor: '#EBCA6C',
    zIndex: '100',
  };

  return (
    <div style={footerStyle}>
      © 2020 Copyright: Breakdown Circulation, Inc., All rights reserved.
    </div>
  );
}
