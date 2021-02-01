import React from 'react';
import {Header, Footer} from 'components';
import {Home} from 'views';
import './App.css';
import { formatMs } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      
      <Header />

      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
