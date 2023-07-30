'use client';

import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Skill from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Container } from '@mui/material';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  return (
    <Container sx={{ overflow: 'hidden' }}>
      <Navbar />
      <HomePage />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Home;
