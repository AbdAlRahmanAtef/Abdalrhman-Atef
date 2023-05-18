import React from 'react';
import Image from 'next/image';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import ts from '../assets/typescript.png';
import Title from './Title';
import react_image from '../assets/react.png';
import redux_image from '../assets/redux.png';
import next_image from '../assets/next.png';
import sass from '../assets/sass.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import nodejs from '../assets/nodejs.png';
import express from '../assets/express.png';
import mui from '../assets/mui.png';
import mongodb from '../assets/mongodb.png';

import { Box, Paper, Stack, Typography } from '@mui/material';

const skills = [
  {
    image: html,
    name: 'HTML',
  },
  {
    image: css,
    name: 'CSS',
  },
  {
    image: js,
    name: 'JavaScript',
  },
  {
    image: ts,
    name: 'TypeScript',
  },
  {
    image: react_image,
    name: 'React',
  },
  {
    image: redux_image,
    name: 'Redux',
  },
  {
    image: next_image,
    name: 'Next',
  },
  {
    image: sass,
    name: 'SASS',
  },
  {
    image: tailwind,
    name: 'TailwindCSS',
  },
  { image: mui, name: 'Mui' },
  { image: nodejs, name: 'Node.Js' },
  { image: express, name: 'Express.Js' },
  { image: mongodb, name: 'MongoDB' },
  {
    image: github,
    name: 'Github',
  },
];

const Skill = () => {
  return (
    <Box mb={6} id="skills">
      <Title text="Skills" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {skills.map((item) => (
          <Paper
            key={item.name}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
              padding: '20px',
              backgroundColor: '#0f1624',
              color: '#737b85',
            }}
          >
            <Image
              src={item.image}
              width={100}
              height={100}
              alt={item.name}
              style={{ borderRadius: '8px', backgroundColor: '#0f1624' }}
            />
            <Typography fontSize="22px" fontWeight={500}>
              {item.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Skill;
