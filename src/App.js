import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
const App = () => {
  return (
    <div className="app">
      {/* Header Using ReactBoostrap and our own styling */}
      <Header/>
      {/* Home */}
      <Home/>
      {/* Footer */}
    </div>
  )
}

export default App
