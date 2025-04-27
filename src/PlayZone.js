import React from 'react';
import './PlayZone.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={process.env.PUBLIC_URL + "/logo.png"} alt="FIFA Logo" className="logo" />
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
        {buttonLabel && <button className="cta-button" onClick={onClick}>{buttonLabel}</button>}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        {['FAQ', 'Partnership', 'Contact Us'].map((item, idx) => (
          <div key={idx} className="column">
            <p>{item}</p>
          </div>
        ))}
      </div>
      <img src={process.env.PUBLIC_URL + "/logo.png"} alt="FIFA 2034 Logo" className="footer-logo" />
      <div className="social-icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-twitter"></i>
      </div>
    </footer>
  );
}

function LeagueCard({ league, flag, onClick }) {
  return (
    <div className="league-card">
      <img src={process.env.PUBLIC_URL + flag} alt={`${league} Flag`} />
      <h4>{league}</h4>
      <button className="play" onClick={() => onClick(league)}>PLAY</button>
    </div>
  );
}

export { Navbar, Hero, Footer, LeagueCard };