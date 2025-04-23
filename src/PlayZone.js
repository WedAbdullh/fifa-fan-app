import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayZone.css';
import WhoAmI from './WhoAmI';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="FIFA Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Overview</li>
        <li>Host Cities & Stadiums</li>
        <li>Teams & Matches</li>
        <li className="active">Play Zone</li>
      </ul>
      <div className="auth-buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
}

function Hero({ headline, sub, buttonLabel, background, onClick }) {
  const heroStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="overlay">
        <h1>{headline}</h1>
        <p>{sub}</p>
        {buttonLabel && (
          <button className="cta-button" onClick={onClick}>
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
}

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
export function LeagueCard({ league, flag, onClick }) {
  return (
    <div className="league-card">
      <img src={flag} alt={`${league} Flag`} />
      <h4>{league}</h4>
      <button onClick={() => onClick(league)}>PLAY</button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        {['FAQ', 'Partnership', 'Contact Us'].map((item, idx) => (
          <div key={idx} className="column">
            <p>FAQ</p>
            <p>Partner Opportunity</p>
            <p>Contact Us</p>
          </div>
        ))}
      </div>
      <img src="/logo-footer.png" alt="FIFA 2034 Logo" className="footer-logo" />
      <div className="social-icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-twitter"></i>
      </div>
    </footer>
  );
}

export default function Playzone() {
  const [step, setStep] = useState('home');
  const [selectedLeague, setSelectedLeague] = useState('');

  const handleGameSelect = () => setStep('league');
  const handleLeagueSelect = (league) => {
    setSelectedLeague(league);
    setStep('whoami');
  };

  const handleBack = () => {
    if (step === 'whoami') {
      setStep('league');
    } else if (step === 'league') {
      setStep('home');
    }
  };

  return (
    <div>
      <Navbar />

      {step === 'home' && (
        <>
          <Hero
            headline="Can you call yourself a real football fan?"
            sub="Find out now!"
            buttonLabel="Let's Go!"
            onClick={handleGameSelect}
          />
          <section className="play-zone">
            <h2>The Play Zone</h2>
            <p>Select a game to play</p>
            <div className="game-grid">
              <GameCard
                title="Who Am I ?"
                description="Can you guess the player from their club badges?"
                imgSrc="whoami.png"
                onClick={handleGameSelect}
              />
              <GameCard
                title="MCQ"
                description="Match the cards and relive FIFA moments"
                imgSrc="mcq.png"
                onClick={() => alert("MCQ not implemented")}
              />
              <GameCard
                title="Who said it"
                description="Guess the football legend by their quote"
                imgSrc="whosaidit.png"
                onClick={() => alert("Quote game not implemented")}
              />
            </div>
          </section>
        </>
      )}

      {step === 'league' && (
        <>
          <Hero headline="Choose a League" sub="Pick a challenge" />
          <section className="leagues">
            <button className="back-button" onClick={handleBack}>← Back</button>
            <h2>Choose the League</h2>
            <div className="league-grid">
              {[
                "Saudi League",
                "Argentine league",
                "Portuguese League",
                "French League",
                "Italian League",
              ].map((league, idx) => (
                <LeagueCard
                  key={idx}
                  league={league}
                  flag={`/${league.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}.png`}
                  onClick={handleLeagueSelect}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {step === 'whoami' && selectedLeague && (
        <>
          <button className="back-button" onClick={handleBack} style={{ margin: '20px 40px' }}>← Back</button>
          <WhoAmI league={selectedLeague} />
        </>
      )}

      <Footer />
    </div>
  );
}

export { Navbar, Hero, Footer };