import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsList } from "react-icons/bs";
import logo from "../assets/logo-1.png";
import Image from "next/image";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const handleMenuClass = () => {
    if (menu) {
      return "links go-down";
    } else {
      return "links";
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      setmenu(false);
    };
  });
  return (
    <div className="navbar">
      <div className="container">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
        >
          <div className="logo">
            <Image src={logo} alt="logo" width={80} height={60} />{" "}
            <span>Abdalrhman</span>
          </div>
        </Link>
        <ul className={handleMenuClass()}>
          <li className="nav-item">
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
          </li>
          <li>
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
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              Skills
            </Link>{" "}
          </li>
          <li>
            <Link
              activeClass="active"
              to="proj"
              spy={true}
              smooth={true}
              offset={-100}
              duration={50}
            >
              Projects
            </Link>
          </li>
          <li>
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
          </li>
        </ul>
        <BsList
          className={menu ? "toggle on" : "toggle"}
          onClick={() => setmenu(!menu)}
        />
      </div>
    </div>
  );
};

export default Navbar;
