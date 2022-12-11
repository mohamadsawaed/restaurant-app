import React from 'react';

 import Home from './pages/home/Home';
 import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <BrowserRouter>

        <Routes>
          {/* <Route path="/Header" element={<Header />} />
          <Route path="/Footer" element={<Footer />} /> */}
          <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="re" element={<re />} /> */}

          </Route>
      </Routes>
      </BrowserRouter>
       
      </header>
      
    </div>
  );
}

export default App;
