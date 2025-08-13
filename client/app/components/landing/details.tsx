import React from 'react';
import { Box, Typography, Button } from '@mui/joy';

export const About: React.FC = () => (
  <Box
    id='about'
    component="section"
    sx={{
      padding: '60px 20px',
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center',
      color: '#ddd',
      backgroundColor: 'transparent',
      borderRadius: 2,
    }}
  >
    <Typography level="h3" sx={{ mb: 2, fontWeight: 'bold', color: '#fff' }}>
      About Us
    </Typography>
    <Typography level="body-md" sx={{ mb: 3, color: '#aaa' }}>
      Nexlink-io is a RAG application used to chat and talk to PDFs about policies and related documents.
      It empowers users by making complex policy documents conversational and easy to understand.
    </Typography>
    <Button
      variant="plain"
      sx={{
        color: '#ccc',
        border: '1.5px solid #555',
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
);

export const Features: React.FC = () => (
  <Box
    component="section"
    id="features"
    sx={{
      backgroundColor: '#181818',
      padding: '60px 20px',
      maxWidth: 900,
      margin: '0 auto',
      borderRadius: 2,
    }}
  >
    <Typography level="h3" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
      Features
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        gap: 4,
      }}
    >
      {[
        { title: 'Fast Performance', desc: 'Lightning-fast loading and responsiveness.' },
        { title: 'Secure', desc: 'Top-notch security standards to protect your data.' },
        { title: 'Easy Integration', desc: 'Works seamlessly with your existing tools.' },
        { title: '24/7 Support', desc: 'We’re here whenever you need help.' },
      ].map((feature) => (
        <Box
          key={feature.title}
          sx={{
            backgroundColor: '#222',
            padding: 3,
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.7)',
          }}
        >
          <Typography level="h4" sx={{ mb: 1, fontWeight: 'bold', color: '#fff' }}>
            {feature.title}
          </Typography>
          <Typography level="body-md" sx={{ color: '#bbb' }}>
            {feature.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export const Pricing: React.FC = () => (
  <Box
    id="pricing"
    component="section"
    sx={{
      padding: '60px 20px',
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: 'transparent',
      borderRadius: 2,
      color: '#ddd',
    }}
  >
    <Typography level="h3" sx={{ mb: 4, fontWeight: 'bold', color: '#fff' }}>
      Pricing Plans
    </Typography>
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {[
        { title: 'Basic', price: '$9/mo', features: ['Feature A', 'Feature B'] },
        { title: 'Pro', price: '$29/mo', features: ['Feature C', 'Feature D'] },
        { title: 'Enterprise', price: 'Contact Us', features: ['Custom solutions', 'Dedicated support'] },
      ].map((plan) => (
        <Box
          key={plan.title}
          sx={{
            backgroundColor: '#222',
            padding: 4,
            borderRadius: 3,
            boxShadow: '0 3px 12px rgba(0,0,0,0.7)',
            minWidth: 240,
            flex: '1 1 240px',
          }}
        >
          <Typography level="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#fff' }}>
            {plan.title}
          </Typography>
          <Typography level="h4" sx={{ mb: 3, color: '#3f51b5' }}>
            {plan.price}
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0, marginBottom: 24, color: '#bbb' }}>
            {plan.features.map((f) => (
              <li key={f} style={{ marginBottom: 8 }}>
                {f}
              </li>
            ))}
          </ul>
          <Button
            variant="solid"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: '#3f51b5',
              '&:hover': {
                backgroundColor: '#303f9f',
              },
            }}
          >
            Choose Plan
          </Button>
        </Box>
      ))}
    </Box>
  </Box>
);

export const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: '#1c1c1c',
      color: '#999',
      padding: '30px 20px',
      textAlign: 'center',
      fontSize: '0.9rem',
      mt: 6,
      borderTop: '1px solid #333',
    }}
  >
    <Typography level="body-md" sx={{ color: '#777' }}>
      &copy; {new Date().getFullYear()} Nexlink-io. All rights reserved.
    </Typography>
    <Typography level="body-md" sx={{ mt: 1, color: '#777' }}>
      Built with ❤️ by Nexlink Team.
    </Typography>
  </Box>
);
