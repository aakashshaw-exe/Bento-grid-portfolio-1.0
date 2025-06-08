// import React from 'react';
// import Landing from './pages/Landing';


// function App() {

//   return (
//     <>
    
//       <Landing/>
//     </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ThoughtDetail from './components/ThoughtDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thoughts/:id" element={<ThoughtDetail />} />
      </Routes>
    </Router>
  );
}

export default App;