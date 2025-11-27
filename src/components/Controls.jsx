import React from 'react';
//butoanele de compress si decompress
const Controls = ({ onCompress, onDecompress }) => {
  return (
    <div className="controls-container">
      <button onClick={onCompress} className="btn compress">
        Compress
      </button>
      <button onClick={onDecompress} className="btn decompress">
        Decompress
      </button>
    </div>
  );
};

export default Controls;