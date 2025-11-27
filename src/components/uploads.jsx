import React, { useState } from 'react';

const FileUpload = ({ onFileLoaded }) => {
  const [isDragging, setIsDragging] = useState(false);

  const readFileContent = (file) => {
    if (file && file.type.match('text.*')) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        onFileLoaded(e.target.result);
      };
      
      reader.readAsText(file);
    } else {
      alert("incrca fisier!");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      readFileContent(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      readFileContent(files[0]);
    }
  };

  return (
    <div 
      className={`drop-zone ${isDragging ? 'active' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Trage un fisier aici</p>
      <label className="file-upload-btn">
        Alege Fisier
        <input 
          type="file" 
          accept=".txt" 
          onChange={handleFileInput} 
          style={{ display: 'none' }} 
        />
      </label>
    </div>
  );
};

export default FileUpload;