'use client';
import Appbar from '@/app/components/landing/appbar';
import SystemDesign from '@/app/components/learn-more/systemDesign';
import TechStack from '@/app/components/learn-more/techstack';
import model from '../../assets/learnhero3.jpg'; // adjust path if needed
import React from 'react';
import { Footer } from '@/app/components/landing/details';
import BioCard from '../../components/Profile'; // Assuming you have a BioCard componen
import Typography from '@mui/joy/Typography/Typography';
import { Card, CardContent } from '@mui/joy';

export default function LearnMore() {
  return (
    <>
      <Appbar />
      <section style={{ paddingTop: '80px', color: '#ddd', backgroundImage: `url(${model.src})` }}>
        <TechStack />
        <SystemDesign />
        <Card color="neutral" variant='plain' sx={{ p: 3, backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography level="h3" sx={{ mb: 2, color: 'white' }}>
              Team Members
            </Typography>


          </CardContent>
          <div style={{ display: 'flex', gap: '16px' }}>
            <BioCard name='Vivek patel' bio='Hello, this is my bio and I am a Cute member of this group. I am a developer and I love to code.' avatar='https://avatars.githubusercontent.com/u/205937653?v=4' />
            <BioCard name='Morpheus' bio='I am the endless dream lord. For centuries I have been trapped in this dream realm, seeking a way to break free.' avatar='https://compote.slate.com/images/a539dcf1-5140-4521-9356-d06f069fa470.jpeg?crop=1560%2C1040%2Cx0%2Cy0' />
          </div>
        
        </Card>
        <Footer />
      </section>
    </>
  );
}