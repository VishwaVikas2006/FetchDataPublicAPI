import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    margin: '24px 0 0 0'
  }}>
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      style={{
        padding: '8px 18px',
        borderRadius: 6,
        border: 'none',
        background: currentPage === 1 ? '#eee' : '#2d72d9',
        color: currentPage === 1 ? '#aaa' : '#fff',
        fontWeight: 600,
        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        fontSize: '1rem',
        transition: 'background 0.2s'
      }}
    >
      Previous
    </button>
    <span style={{fontWeight: 500, fontSize: '1.1rem', color: '#2d72d9'}}>Page {currentPage} of {totalPages}</span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      style={{
        padding: '8px 18px',
        borderRadius: 6,
        border: 'none',
        background: currentPage === totalPages ? '#eee' : '#2d72d9',
        color: currentPage === totalPages ? '#aaa' : '#fff',
        fontWeight: 600,
        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        fontSize: '1rem',
        transition: 'background 0.2s'
      }}
    >
      Next
    </button>
  </div>
);

export default Pagination;
