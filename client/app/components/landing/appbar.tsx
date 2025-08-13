'use client';
import React from 'react';
import { ChevronRight } from "lucide-react";
import { Button } from "@mui/joy";
import logo from "../../assets/logo.png"; // Adjust the path as necessary
import { useRouter } from 'next/navigation'


const Appbar: React.FC = () => {
  const router = useRouter();
  return (
    <nav
      style={{
        height: '60px',
        backgroundColor: '#0d0d0d',            // polished black theme background
        boxShadow: '0 2px 6px rgba(0,0,0,0.9)', // subtle shadow for depth
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        justifyContent: 'space-between',
        position: 'fixed',
        borderBottom: '1px solid #222',        // subtle dark border
        zIndex: 1000,
        width: '100%',
        boxSizing: 'border-box',
        color: '#eee',                        // light text color
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <img src={logo.src} alt="Logo" style={{ height: '40px', width: 'auto' }} />

        <a href="/" style={{ color: '#eee', fontWeight: 'bold', fontSize: '1.2rem', marginLeft: '10px' }}>Nexlink-io</a>
      </div>

      <div>
        <a href="#about" style={{ color: '#ccc', fontWeight: 500, textDecoration: 'none' }}>About</a>
        <a href="#features" style={{ marginLeft: '25px', color: '#ccc', fontWeight: 500, textDecoration: 'none' }}>Features</a>
        <a href="#pricing" style={{ marginLeft: '25px', color: '#ccc', fontWeight: 500, textDecoration: 'none' }}>Pricing</a>
      </div>

      <div>
        <Button
          onClick={() => {
            router.push('/account/login');
          }}
          color="neutral"
          variant="plain"
          sx={{
            color: '#ccc',
            border: '1.5px solid #555',
            marginRight: '15px',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1.5px solid #fff',
            },
          }}

        >
          Log in
        </Button>
        <Button
          color="primary"
          variant="solid"
          onClick={() => {
            router.push('/account/register');
          }}
          sx={{
            marginRight: '15px',
            paddingLeft: '25px',
            backgroundColor: '#3f51b5',
            '&:hover': {
              backgroundColor: '#303f9f',
            },
          }}

        >
          Try Free
          <ChevronRight />
        </Button>
      </div>
    </nav>
  );
};

export default Appbar;