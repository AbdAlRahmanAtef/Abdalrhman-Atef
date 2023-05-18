import React from 'react';
import Title from './Title';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box mb={4} id="about">
      <Title text={'About'} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          gap: 4,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Typography
          sx={{ flex: 1, fontSize: '40px', fontWeight: 700, color: '#ffffff' }}
        >
          Hi. I'm Abdalrahman, nice to meet you. Please take a look around.
        </Typography>

        <Typography sx={{ flex: 1, lineHeight: 1.6, fontSize: '18px' }}>
          I'm passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. What would you do if you had a software
          expert available at your fingertips?
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
