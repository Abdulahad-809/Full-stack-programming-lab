import React, { useState } from 'react';

export default function Actions() {
  const [message, setMessage] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [hoveredButton, setHoveredButton] = useState('');

  const handleShowMessage = () => {
    setMessage('Hello! This is your message.');
  };

  const handleChangeBgColor = () => {
    // cycle a few nice background colors
    const next = bgColor === '#ffffff' ? '#f0f8ff' : bgColor === '#f0f8ff' ? '#fffae6' : '#ffffff';
    setBgColor(next);
  };

  const handleShowAlert = () => {
    window.alert('This is an alert message!');
  };

  const getButtonStyle = (buttonKey) => ({
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    margin: '0.25rem',
    border: '1px solid #444',
    borderRadius: '4px',
    background: '#fff',
    color: hoveredButton === buttonKey ? '#d12a2a' : '#222',
  });

  return (
    <div
      style={{
        padding: '1.5rem',
        borderRadius: '8px',
        backgroundColor: bgColor,
        maxWidth: '420px',
        margin: '1rem auto',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}
    >
      <h2>Actions</h2>
      <div>
        <button
          style={getButtonStyle('message')}
          onClick={handleShowMessage}
          onMouseOver={() => setHoveredButton('message')}
          onMouseOut={() => setHoveredButton('')}
        >
          Show message
        </button>
        <button
          style={getButtonStyle('bg')}
          onClick={handleChangeBgColor}
          onMouseOver={() => setHoveredButton('bg')}
          onMouseOut={() => setHoveredButton('')}
        >
          Change background color
        </button>
        <button
          style={getButtonStyle('alert')}
          onClick={handleShowAlert}
          onMouseOver={() => setHoveredButton('alert')}
          onMouseOut={() => setHoveredButton('')}
        >
          Show alert
        </button>
      </div>

      {message && (
        <p style={{ marginTop: '1rem', color: '#333', fontWeight: 500 }}>
          {message}
        </p>
      )}
    </div>
  );
}
