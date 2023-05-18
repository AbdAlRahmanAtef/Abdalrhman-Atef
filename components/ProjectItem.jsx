import {
  Box,
  Button,
  Collapse,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { ImStackoverflow } from 'react-icons/im';
import { MdKeyboardArrowDown, MdRemoveRedEye } from 'react-icons/md';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';

const ProjectItem = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  //#171d2d
  return (
    <Paper
      sx={{
        backgroundColor: '#0f1624',
        borderRadius: '6px',
        overflow: 'hidden',
        color: '#737b85',
      }}
    >
      <Image className="image" src={project.image} alt={project.name} />
      <Box sx={{ padding: '16px' }}>
        {' '}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: '40px' }}>
          {' '}
          <Typography
            sx={{
              fontSize: '26px',
              position: 'relative',
              fontWeight: 700,
              color: '#b6c0c0',
              width: 'fit-content',
              background:
                'linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&::before': {
                content: '""',
                width: '60%',
                height: '4px',
                background:
                  'linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%)',
                position: 'absolute',
                bottom: '-10PX',
                borderRadius: '2px',
                left: '50%',
                transform: 'translateX(-50%)',
              },
            }}
          >
            {project.name}
          </Typography>
        </Box>
        <Box textAlign="center">
          <Button
            startIcon={<ImStackoverflow />}
            endIcon={
              <MdKeyboardArrowDown
                size={25}
                style={{
                  transform: `rotate(${expanded ? '180deg' : '0deg'})`,
                  transition: '.3s',
                }}
              />
            }
            sx={{
              background: 'linear-gradient(220deg, #0f1624, #202c41)',
              color: '#fff',
              px: '20px',
              py: '10px',
              fontSize: '20px',
              fontWeight: 500,
              borderRadius: '26px',
              transition: '.3s',
              mb: 4,
              '&:hover': {
                transform: 'scale(1.06)',
              },
            }}
            onClick={() => setExpanded((prev) => !prev)}
          >
            Stack
          </Button>
        </Box>
        <Collapse in={expanded}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              pt: 2,
              mb: 2,
              justifyContent: 'center',
            }}
          >
            {' '}
            {project.stack.map((tec) => (
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  p: '10px 16px',
                  border: '1px solid #fff',
                  borderRadius: '22px',
                  color: '#fff',
                }}
                key={tec.tec}
              >
                {tec.icon} {tec.tec}
              </Typography>
            ))}
          </Box>
        </Collapse>
        <Stack direction="row" gap={2} justifyContent="space-between">
          <Button
            component={Link}
            href={project.code}
            target="_blank"
            rel="noreferrer"
            startIcon={<AiFillGithub />}
            sx={{
              background: 'linear-gradient(220deg, #0f1624, #202c41)',
              color: '#fff',
              px: '14px',
              py: '6px',
              fontSize: '16px',
              fontWeight: 400,
              borderRadius: '16px',
              transition: '.3s',
              '&:hover': {
                transform: 'scale(1.06)',
              },
            }}
          >
            Code
          </Button>
          <Button
            component={Link}
            href={project.live}
            target="_blank"
            rel="noreferrer"
            startIcon={<MdRemoveRedEye />}
            sx={{
              background: 'linear-gradient(220deg, #0f1624, #202c41)',
              color: '#fff',
              px: '14px',
              py: '6px',
              fontSize: '16px',
              fontWeight: 400,
              borderRadius: '16px',
              transition: '.3s',
              '&:hover': {
                transform: 'scale(1.06)',
              },
            }}
          >
            Preview
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default ProjectItem;
