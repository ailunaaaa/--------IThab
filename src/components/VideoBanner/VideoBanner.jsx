import React from 'react';
import './StaticBanner.css';

export default function VideoBanner() {
  return (
    <div className="video-banner">
      {/* Вариант 1: Видео с локального сервера */}
      <video autoPlay muted loop playsInline>
        <source src="/videos/hub-promo.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео
      </video>
      
      {/* Вариант 2: Если нет видео - можно использовать изображение */}
      {/* <img src="/images/banner-placeholder.jpg" alt="IT-Hub" /> */}
      
      <div className="video-overlay">
        <h1>Добро пожаловать в IT-Hub!</h1>
      </div>
    </div>
  );
}