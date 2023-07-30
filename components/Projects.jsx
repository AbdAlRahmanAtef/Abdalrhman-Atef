'use client';

import React, { useState } from 'react';
import { projectsData } from '../utils/constants';
import { Box, Button, Link } from '@mui/material';
import Title from './Title';
import ProjectItem from './ProjectItem';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <Box id="projects">
      <Title text="Projects" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          mb: 6,
        }}
      >
        {projectsData.map((project) => (
          <ProjectItem project={project} key={project.name} />
        ))}
      </Box>

      <Box textAlign="center" mb={6}>
        <Button
          component={Link}
          href="https://github.com/AbdAlRahmanAtef?tab=repositories"
          target="_blank"
          startIcon={<AiFillGithub size={25} />}
          sx={{
            background: 'linear-gradient(to right, #0f1624, #202c41)',
            boxShadow: 'none',
            color: '#fff',
            px: '20px',
            py: '10px',
            fontSize: '20px',
            fontWeight: 400,
            borderRadius: '26px',
            transition: '.3s',
            '&:hover': {
              transform: 'scale(1.06)',
            },
          }}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
