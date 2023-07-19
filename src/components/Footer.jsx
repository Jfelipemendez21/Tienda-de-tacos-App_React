import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contáctanos</h4>
            <p>Correo electrónico: jfelipemendez2103@gmail.com</p>
          </div>
          <div className="col-md-6">
            <h4>Síguenos en redes sociales</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/juanfelipe.mendez.9674/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f">Facebook</i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/unknown._p3rs0n/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram">Instagram</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;