import React from 'react';

const Error = ({ message }) => (
  <div className="error" style={{
    background: '#ffe0e0',
    color: '#d32f2f',
    borderRadius: 8,
    padding: '16px',
    margin: '24px 0',
    textAlign: 'center',
    fontWeight: 500
  }}>
    Error: {message}
  </div>
);

export default Error;
