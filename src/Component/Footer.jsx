import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
          
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover"><Link to='about'>About us</Link></a>
                <a className="link link-hover"><Link to='Contact'>Contact</Link></a>
               
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <a href='https://www.facebook.com/' className="link link-hover">facebook</a>
                <a href='https://www.instagram.com/?hl=en#reactivated' className="link link-hover">instragram</a>
                <a href='https://www.linkedin.com/' className="link link-hover">linkedin</a>
            </nav>
        </footer>
    );
};

export default Footer;