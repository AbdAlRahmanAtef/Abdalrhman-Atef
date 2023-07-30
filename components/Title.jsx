'use client';

import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Title = ({ text }) => {
  return (
    <Stack>
      <Box
        sx={{
          background: 'linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)',
          height: '4px',
          borderRadius: '2px',
          width: '80px',
          mb: 4,
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: '40px', md: '60px' },
          fontWeight: 800,
          color: '#b6c0c0',
          width: 'fit-content',
          background:
            'linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 4,
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default Title;
