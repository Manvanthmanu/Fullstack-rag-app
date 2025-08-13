'use client';  
import React from 'react';
import { Box, Typography, Button } from '@mui/joy';
import { ChevronRight } from 'lucide-react';
import hero1 from '../../assets/hero1.jpg'; // Adjust the path as necessary
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 3,
        color: '#eee',
        borderRadius: 2,
        mb: 6,
        userSelect: 'none',

        // Background image related styles:
        backgroundImage: `url(${hero1.src})`,

        backgroundSize: 'cover',           // Makes sure it covers entire hero horizontally
        backgroundPosition: 'center center', // Center the image (adjust as needed)
        backgroundRepeat: 'no-repeat',
      }}
    >
        
      <Typography
        level="h1"
        sx={{
          fontWeight: 'xl',
          mb: 2,
          maxWidth: 700,
          lineHeight: 1.1,
          background: 'linear-gradient(270deg, #6a11cb, #2575fc, #6a11cb)',
          backgroundSize: '600% 600%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientGlow 8s ease infinite',
          '@keyframes gradientGlow': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        Chat with Your PDFs — Policies Made Simple.
      </Typography>

      <Typography level="body-lg" sx={{ mb: 4, maxWidth: 600, color: '#bbb' }}>
        Nexlink-io is a powerful RAG application that lets you easily interact with policy documents,
        ask questions, and get instant answers — all in a conversational interface.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant="solid"
          color="primary"
          size="lg"
          sx={{
            backgroundColor: '#3f51b5',
            px: 4,
            py: 1,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#303f9f',
            },
            fontSize: '1.1rem',
          }}
          onClick={() => {
            router.push('/account/register');
          }}
        >
          Try It Free
          <ChevronRight
            style={{
              fontSize: 20,
              marginLeft: 4,
              position: 'relative',
              top: 1,
            }}
          />
        </Button>

        <Button
          onClick={() => {
            router.push('/landing/learn-more');
          }}
          variant="plain"
          color="neutral"
          size="lg"
          sx={{
            color: '#ccc',
            border: '1.5px solid #555',
            px: 4,
            fontSize: '1.1rem',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1.5px solid #fff',
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
