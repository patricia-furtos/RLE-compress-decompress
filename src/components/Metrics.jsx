import React from 'react';
//lungime, raport, timp, status
const Metrics = ({ metrics }) => {
  if (!metrics) return null;
  const statusColor = metrics.status.includes("Eroare") ? "#e74c3c" : "#27ae60";

  return (
    <div className="metrics-container" style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
      <h3 style={{ marginTop: 0 }}>Rezultate & Metrici</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div>
          <strong>Lungime Input:</strong> {metrics.inputLen} caractere
        </div>
        <div>
          <strong>Lungime Output:</strong> {metrics.outputLen} caractere
        </div>

        <div>
          <strong>Raport Compresie:</strong> {metrics.ratio}
          <small style={{ color: '#7f8c8d', display: 'block' }}>(Output / Input)</small>
        </div>

        <div>
          <strong>Timp executie:</strong> {metrics.time.toFixed(4)} ms
        </div>
      </div>

      <div style={{ marginTop: '15px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
        <strong>Status: </strong> 
        <span style={{ color: statusColor, fontWeight: 'bold' }}>
          {metrics.status}
        </span>
      </div>
    </div>
  );
};

export default Metrics;