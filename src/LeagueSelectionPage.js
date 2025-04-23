import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LeagueCard, Navbar, Hero, Footer } from './PlayZone'; // ✅ Import all components

export default function LeagueSelectionPage() {
  const navigate = useNavigate();

  const leagues = [
    {
      name: "Argentine league",
      folder: "Argentine_league",
      flag: "Argentine_league.png"
    },
    {
      name: "Italian League",
      folder: "Italian-League",
      flag: "Italian-League.png"
    },
    {
      name: "Saudi League",
      folder: "Saudi-League",
      flag: "Saudi-League.png"
    },
  ];

  const handlePlay = (leagueName) => {
    navigate(`/quiz/${leagueName}`);
  };

  return (
    <div>
      {/* 🟣 Header Navigation */}
      <Navbar />

      {/* 🟢 Hero Section */}
      <Hero
        headline="Guess the football player"
        sub="Pick a league to start the challenge!"
        buttonLabel=""
        background="/whoami.png"
      />

      {/* 🟡 League Cards */}
      <section className="leagues">
        <h2>Choose a League</h2>
        <div className="league-grid">
          {leagues.map((league, i) => (
            <LeagueCard
              key={i}
              league={league.name}
              flag={league.flag}
              onClick={handlePlay}
            />
          ))}
        </div>
      </section>

      {/* 🔵 Footer */}
      <Footer />
    </div>
  );
}