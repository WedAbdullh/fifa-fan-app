// src/GameSelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Hero, Footer } from './PlayZone';

function GameCard({ title, description, imgSrc, route }) {
  const navigate = useNavigate();

  return (
    <div className="game-card">
      <img src={imgSrc} alt={title} />
      <div className="game-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <button onClick={() => navigate(route)}>PLAY</button>
      </div>
    </div>
  );
}

export default function GameSelectionPage() {
  return (
    <div>
      <Navbar />
      <Hero
        headline="The Play Zone"
        sub="Select a game to play"
        background="/stadium.jpg"
      />

      <section className="play-zone">
        <div className="game-grid">
          <GameCard
            title="Who Am I ?"
            description="Can you guess the player from their club badges?"
            imgSrc="whoami.png"
            route="/leagues"
          />
          <GameCard
            title="MCQ"
            description="Match the cards, progress through levels and relive FIFA World cup moments"
            imgSrc="mcq.png"
            route="/mcq"
          />
          <GameCard
            title="Who said it"
            description="New Quote Added! Guess the football legend"
            imgSrc="whosaidit.png"
            route="/quotes"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}