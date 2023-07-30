'use client';

import React from 'react';
import AnimatedBg from './AnimatedBg';
import { Box, Typography } from '@mui/material';
const HomePage = () => {
  return (
    <Box sx={{ position: 'relative', maxHeight: '500px' }}>
      {' '}
      <AnimatedBg />
      <Box sx={{ position: 'absolute', top: '30%', color: '#b5c0c0' }}>
        <div className="info">
          <Typography sx={{ fontSize: '20px' }}>Hi, my name is</Typography>
          <Typography
            sx={{
              fontSize: { xs: '30px', md: '70px' },
              fontWeight: 700,
              color: '#b6c0c0',
              width: 'fit-content',
              background:
                'linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Abdalrahamn Atef
          </Typography>
          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: 500,
              mb: 1,
            }}
          >
            I&apos;m a JavaScript Full Stack Developer.
          </Typography>
          <p>I&apos;m building web applications</p>
        </div>
      </Box>
    </Box>
  );
};

export default HomePage;
