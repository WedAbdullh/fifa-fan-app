// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameSelectionPage from './GameSelectionPage';
import LeagueSelectionPage from './LeagueSelectionPage';
import WhoAmI from './WhoAmI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameSelectionPage />} />
        <Route path="/leagues" element={<LeagueSelectionPage />} />
        <Route path="/quiz/:leagueName" element={<WhoAmI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;