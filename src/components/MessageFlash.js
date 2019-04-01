import React, { Component } from 'react';
import './messageflash.css';


class MessageFlash extends Component {

  render() {
    console.log('render Message');
    const { text, status } = this.props
    return (
      <div className='alert-show'>
        <div className="container-rectangle">
          <div className={`rectangle rectangle--${status}`}>
            <img id="alert-img" src={`./images/${status}.png`} alt="error" />
            <div className="notification-text">
              <span>&nbsp;&nbsp;{text}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageFlash;