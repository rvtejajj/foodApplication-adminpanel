import React from 'react';
import { assets } from '../../assets/assert';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 border-top mt-auto">
      <div className='mt-2 me-4'>
      <a
          href="https://www.linkedin.com/in/ravi-teja-jonnalagadda-19078347/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src={assets.linkedIn} alt="LinkedIn" width={40} height={40} />
        </a>
        <span> Developed by Ravi Teja Jonnalagadda </span>
      </div>
    </footer>
  )
}

export default Footer