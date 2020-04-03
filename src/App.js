import React from 'react';
import handbook from './Developers_Handbook_LF.pdf';
import './App.css';

function App() {
  return (
      <embed src={handbook} type="application/pdf" width="100%" height = "100%"/>
  );
}

export default App;
