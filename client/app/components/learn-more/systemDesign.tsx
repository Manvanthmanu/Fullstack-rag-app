'use client';

import * as React from 'react';
import { Card, CardContent, Typography, AspectRatio } from '@mui/joy';
import Image from 'next/image';
import modelImage from '../../assets/model.png'; // adjust path if needed

export default function SystemDesign() {
  return (
    <Card variant='plain'  sx={{ p: 3, backgroundColor: 'transparent' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography level="h3" sx={{ mb: 2 , color: 'white' }}>
          System Design
        </Typography>
        <AspectRatio ratio="16/9" variant="plain">
          <Image
            src={modelImage}
            alt="System Design Diagram"
            style={{ objectFit: 'contain' }}
          />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}
