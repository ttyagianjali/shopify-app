import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <Router>
        <Routes>
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </StyletronProvider>
  );
}

export default App;
