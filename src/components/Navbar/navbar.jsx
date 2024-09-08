import React, { useState, useEffect } from 'react';
import Style from './navbar.module.css';
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [scrolled, setScrolled]= useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled (false);
    }
  };


  useEffect( () => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <nav className={`${Style.navbarContainer} navbar navbar-expand-lg sticky-top ${scrolled ? Style.scrolled : ''} `}>
      <div className="container">
        <div className="d-flex align-items-center">
          <img src={Logo} alt="" />
          <a className={Style.logo}> <b>HM</b></a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`${Style.navbar} navbar-nav ms-auto mb-2 mb-lg-0`}>
            <li className={`${Style.navItem} px-5`}>
              <Link
                className={Style.navLink}
                to='home'
                smooth={true}
                duration={100}
              >
              Home
              </Link>
            </li>
            <li className={`${Style.navItem} px-5`}>
              <Link
              className={Style.navLink}
              to='about'
              smooth={true}
              duration={100}
              >
              About Me
              </Link>
            </li>
            <li className={`${Style.navItem} px-5`}>
              <Link
              className={Style.navLink}
              to='project'
              smooth={true}
              duration={100}
              >
              Projects
              </Link>
            </li>
            <li className={`${Style.navItem} px-5`}>
              <Link
              className={Style.navLink}
              to='contact'
              smooth={true}
              duration={100}
              >
              Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
