import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/home";
import ProfilePage from "./scenes/profile";
import DrillsPage from "./scenes/drill";
import SkillsPage from "./scenes/categories";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="app">
              <HomePage />
            </div>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <div className="app">
              <ProfilePage />
            </div>
          }
        />
        <Route
          exact
          path="/skills"
          element={
            <div className="app">
              <SkillsPage />
            </div>
          }
        />
        <Route
          exact
          path="/drills"
          element={
            <div className="app">
              <DrillsPage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;