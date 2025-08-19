import React from 'react';

const Loader = () => (
  <div className="loader" style={{textAlign: 'center', margin: '32px 0'}}>
    <div style={{
      display: 'inline-block',
      width: 48,
      height: 48,
      border: '6px solid #2d72d9',
      borderTop: '6px solid #f6d365',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }`}</style>
    <div style={{marginTop: 12, color: '#2d72d9', fontWeight: 500}}>Loading...</div>
  </div>
);

export default Loader;
