import React from "react";
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt="logo"/>
          <p>We are a family owned Mediterranean restaurant, foucused on traditional recipes served with a modern twist.</p>
        </div>

        <div>
          <h3>
            Site Map
          </h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservations</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>

        <div>
          <h3>
            Contact Us
          </h3>
          <ul>
            <li> Address: <br/> 123 Fake Ave, Chicago, IL 60602</li>
            <li> Phone: <br/> +1(012)345-6789</li>
            <li> Email: <br/> info@littlelemon.com</li>
          </ul>
        </div>

        <div>
          <h3>
            Connect With Us
          </h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Twitter</a></li>
            <li><a href='/'>YouTube</a></li>
          </ul>
        </div>

      </section>
    </footer>
  );
};

export default Footer;