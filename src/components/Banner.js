import React from 'react';
import '../assets/scss/banner.scss';
import Calendar from './calendar';

export default function Banner() {
  return (
    <div className="top-banner">
      <Calendar />
    </div>
  );
}
