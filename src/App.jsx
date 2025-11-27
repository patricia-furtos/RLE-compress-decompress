import React, { useState } from 'react';
import TextDisplay from './components/TextDisplay';
import Controls from './components/Controls';
import Metrics from './components/Metrics';
import FileUpload from './components/uploads';
import { compressRLE, decompressRLE } from './Utils/rleLogic';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [metrics, setMetrics] = useState(null);

  const handleFileLoaded = (content) => {
    setInputText(content);
    setOutputText("");
    setMetrics(null);
  };

  const handleAction = (actionType) => {
    if (!inputText) {
        setMetrics({ 
            status: "Eroare: Introduceti text sau incarcati un fisier!", 
            time: 0, ratio: 0, inputLen: 0, outputLen: 0 
        });
        return;
    }

    const start = performance.now();
    let result = "";
    let currentStatus = "";

    try {
      if (actionType === 'compress') {
        result = compressRLE(inputText);
        currentStatus = "Compresie reusita";
      } else {
        result = decompressRLE(inputText);
        currentStatus = "Decompresie reusita";
      }
    } catch (error) {
        currentStatus = "Eroare la procesare";
        console.error(error);
    }

    const end = performance.now();
    
    const originalSize = inputText.length;
    const newSize = result.length;

    const raport = originalSize > 0 
        ? (newSize / originalSize).toFixed(4) 
        : "0.0000";

    setOutputText(result);
    setMetrics({
      time: end - start,
      raport: raport,
      inputLen: originalSize,
      outputLen: newSize,
      status: currentStatus
    });
  };

  return (
    <div className="app-container">
      <h1>Compresie RLE</h1>
      
      <FileUpload onFileLoaded={handleFileLoaded} />

      <TextDisplay 
        inputText={inputText} 
        setInputText={setInputText} 
        outputText={outputText} 
      />
      
      <Controls 
        onCompress={() => handleAction('compress')} 
        onDecompress={() => handleAction('decompress')} 
      />
      
      <Metrics metrics={metrics} />
    </div>
  );
}

export default App;