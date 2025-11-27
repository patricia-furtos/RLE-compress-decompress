import React from 'react';
//textul din carduri
const TextDisplay = ({ inputText, setInputText, outputText }) => {
  return (
    <div className="text-display-container">
      <div className="text-box">
        <label>Text Original (Input)</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Scrie textul aici..."
        />
      </div>

      <div className="text-box">
        <label>Rezultat (Output)</label>
        <textarea
          value={outputText}
          readOnly
          className="read-only"
          placeholder="Rezultatul apare aici..."
        />
      </div>
    </div>
  ); 
};   

export default TextDisplay; 