import React from 'react';
import './Navbar.scss';

const Navabr = [
  {
    id: 'home',
    name: 'Home',
    link: '/',
  },
  {
    id: 'about',
    name: 'About',
    link: '/about',
  },
  {
    id: 'services',
    name: 'Services',
    link: '/services',
  },
  {
    id: 'it_support',
    name: 'IT support',
    link: '/it-support',
  },
  {
    id: 'sofware_devloper',
    name: 'Software Developer',
    link: '/software-developer',
  },
  {
    id: 'contact',
    name: 'Contact Us',
    link: '/contact-us',
  },
];

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">NERD TECH</a>
        </div>
        <div className="navbar-menu">
          <ul>
            {Navabr.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
