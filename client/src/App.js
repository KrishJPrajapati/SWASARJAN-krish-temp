import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

export default function App() {
  return (
    <Router basename="/SwaSarjan">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}