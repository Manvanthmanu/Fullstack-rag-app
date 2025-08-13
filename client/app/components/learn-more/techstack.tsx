'use client';

import * as React from 'react';
import { Card, CardContent, Typography, Grid, Chip } from '@mui/joy';

export default function TechStack() {
  const stack = [
    'Next.js',
    'MUI Joy UI',
    'LangChain',
    'OpenAI API',
    'Vector Database',
    'Express.js',
    'PostgreSQL',
  ];

  return (
    <Card color="neutral" variant='plain' sx={{ p: 3, backgroundColor: 'transparent' , display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography level="h3" sx={{ mb: 2, color: 'white' }}>
          Tech Stack
        </Typography>
        <Grid container spacing={1}>
          {stack.map((tech) => (
            <Grid key={tech}>
              <Chip
                variant="soft"
                
                size="lg"
                sx={{ paddingX:'20px' , paddingY:'8px', fontSize: '1rem', backgroundColor:'black', color: 'white', '&:hover': { backgroundColor: '#3f51b5', cursor:'pointer'  } }}
              >
                {tech}
              </Chip>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
