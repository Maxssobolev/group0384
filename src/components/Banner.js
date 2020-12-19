import React from 'react';
import '../assets/scss/banner.scss';
import Calendar from './calendar';

export default function Banner() {
  return (
    <div className="top-banner">
      {window.location.href === 'https://group0384.ru/admin-panel' && (
        <h1
          style={{
            width: 'fit-content',
            margin: '0 auto',
            background: 'black',
            padding: '0 30px',
          }}>
          <a href="/admin-panel" id="banner">
            AdminPanel
          </a>
        </h1>
      )}
      <Calendar />
    </div>
  );
}
