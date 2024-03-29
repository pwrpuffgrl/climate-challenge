import React from 'react';

function Logo({ className }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <path
        d="M23.05 23.05V488.9H488.9V23.05zm17.9 17.9H471.1V471.1H40.95z"
        transform="translate(80, 80) scale(0.7, 0.7) rotate(45, 256, 256)"
      />
    </svg>
  );
}

export default Logo;
