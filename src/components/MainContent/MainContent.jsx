import React from 'react';
import VideoBanner from '../VideoBanner';
import './MainContent.css';

export default function MainContent() {
  return (
    <div className="main-content">
      <VideoBanner />
      <section className="about-section">
        <h2>Наш IT-Hub - это:</h2>
        <ul>
          <li>Современные компьютерные классы</li>
          <li>Профессиональные преподаватели</li>
          <li>Актуальные образовательные программы</li>
        </ul>
      </section>
    </div>
  );
}