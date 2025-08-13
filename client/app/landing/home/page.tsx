'use client';
import React from 'react';
import { About, Features, Footer, Pricing } from "../../components/landing/details";
import Hero from "../../components/landing/hero";
import Appbar from '../../components/landing/appbar';



const LandingPage: React.FC = () => {
  return (
    <>
      <header
        style={{
          minHeight: '100vh',
          backgroundColor: '#1a237e', // base deep purple
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0.05) 10px,
              transparent 10px,
              transparent 20px
            ),
            linear-gradient(135deg, #000000ff, #08091dff)
          `,
          backgroundBlendMode: 'overlay',
          overflowX: 'hidden',
        }}
      >
        <Appbar />
        <section style={{ paddingTop: '80px', color: '#ddd' }}>
          <Hero />
          <About />
          <Features />
          <Pricing />
          <Footer />
        </section>
      </header>
    </>
  );
};

export default LandingPage;
