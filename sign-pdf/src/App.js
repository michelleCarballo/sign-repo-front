import React from 'react'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Router />
    </div>
    </BrowserRouter>
  );
}

export default App;