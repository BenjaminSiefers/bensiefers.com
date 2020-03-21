import React from 'react';
require('dotenv').config();
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
function App() {
  return (
    <Router>
      <Route path='/' exact strict render={() => <LandingPage />}></Route>
    </Router>
  );
}

export default App;
