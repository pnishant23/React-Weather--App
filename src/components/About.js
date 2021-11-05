import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaGithubSquare } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <div className="about">
        <h3>
          Developed by <span>Nishant Patil</span> and Designed by{' '}
          <span>Aditya Kashyap</span>
        </h3>
        <p>
          This project is completely buid from scratch wihout any reference from
          youtube, google, etc
        </p>
        <p>Source code is available on github </p>
        <div className="social">
          <a href="https://github.com/pnishant2">
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <Navbar />
    </>
  );
}
