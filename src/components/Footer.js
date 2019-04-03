import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer container">
        <div className="footer-section">
          <div className="footer-wrapper">
          <div className="social-item social-item--wide">
              <img src="./images/social/whatsapp.png" alt="logo whatsapp" />
              <p className="footer-phone">+34 617 912 123</p>
          </div>
          </div>
          <div className="footer-wrapper">
            <div className="social-item">
              <img src="./images/social/instagram.png" alt="logo instagram" />
              <p>40k+ seguidores</p>
            </div>
            <div className="social-item">
              <img src="./images/social/facebook.png" alt="logo facebook" />
              <p>25k+ seguidores</p>
            </div>
            <div className="social-item">
              <img src="./images/social/youtube.png" alt="logo youtube" />
              <p>100k+ suscriptores</p>
            </div>
            <div className="social-item">
              <img src="./images/social/twitter.png" alt="logo twitter" />
              <p>14k+ followers</p>
            </div>
          </div>
        </div>
        <div className="section-footer">

        </div>
        <div className="section-footer">

        </div>
      </div >
    );
  }
}

export default Footer;