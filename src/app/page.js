'use client';

import React from 'react';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <NavBar />
      Welcome to Joke Generator!
    </div>
  );
}

export default Home;
