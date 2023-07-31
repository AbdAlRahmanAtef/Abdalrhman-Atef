'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import Image from 'next/image';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      setShowMenu(false);

      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setHidden(false);
        lastScroll = currentScroll;
      }

      if (currentScroll > lastScroll) {
        setHidden(true);
        lastScroll = currentScroll;
      } else if (currentScroll < lastScroll) {
        setHidden(false);
        lastScroll = currentScroll;
      }
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      console.log(e.target);
      if (
        navRef &&
        iconRef &&
        showMenu &&
        !navRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [showMenu]);

  return (
    <Paper
      sx={{
        p: '16px 16px',
        backgroundColor: '#0f1624',
        position: 'fixed',
        width: '100%',
        left: 0,
        right: 0,
        transition: '.3s',
        zIndex: 1000,
        top: hidden ? '-100px' : '0px',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {' '}
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src={logo}
                  width={80}
                  height={60}
                  alt="logo"
                  className="logo-image"
                />{' '}
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: 700,
                    color: '#b6c0c0',
                    width: 'fit-content',
                    background:
                      'linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  Abdalrahman
                </Typography>
              </Typography>
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={50}
              >
                Home
              </Link>
            </Typography>
            <Typography className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={50}
              >
                About
              </Link>
            </Typography>
            <Typography className="nav-item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={50}
              >
                Skills
              </Link>{' '}
            </Typography>
            <Typography className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={50}
              >
                Projects
              </Link>
            </Typography>
            <Typography className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-300}
                duration={50}
              >
                Contact
              </Link>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <div
              className={`burger-icon  ${showMenu && 'close'}`}
              onClick={() => setShowMenu((prev) => !prev)}
              ref={iconRef}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Box>
        </Box>
      </Container>

      <Paper
        sx={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0f1624',
          zIndex: 10,
          height: 'calc(100vh - 77px)',
          top: '77px',
          right: showMenu ? 0 : '-120%',
          width: '250px',
          alignItems: 'start',
          padding: '16px',
          gap: 2,
          transition: '.5s',
        }}
      >
        {' '}
        <div ref={navRef}>
          <Typography className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              Home
            </Link>
          </Typography>
          <Typography className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              About
            </Link>
          </Typography>
          <Typography className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              Skills
            </Link>{' '}
          </Typography>
          <Typography className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              Projects
            </Link>
          </Typography>
          <Typography mb={4} className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-300}
              duration={50}
            >
              Contact
            </Link>
          </Typography>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/abdalrhman-atef-12b73022b/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/AbdAlRahmanAtef"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub />
            </a>
            <a
              href="mailto:abdalrhman.atef.ramadan@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <HiMail />
            </a>
            <a href="tel:01019694471" rel="noreferrer">
              <BsTelephoneFill />
            </a>
          </div>
        </div>
      </Paper>
    </Paper>
  );
};

export default Navbar;
