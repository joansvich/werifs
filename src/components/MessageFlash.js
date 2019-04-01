import React, { Component } from 'react';
import './messageflash.css';


class MessageFlash extends Component {

  state = {
    timeInit: 0,
    display: 'alert-show',
    showMessage: true
  }

  timeout() {
    if (this.state.showMessage) {
      this.timeoutId = setTimeout(() => {
        this.setState({
          display: 'alert-none',
          showMessage: false
        })
      }, 6000)
    }
  }

  componentWillUnmount() {
    console.log('um');
    clearInterval(this.timeoutId);
  }


  render() {
    console.log('render');
    const { text, modifier } = this.props
    const { display } = this.state;

    return (
      <div className={display}>
        <div className="container-rectangle">
          <div className={`rectangle rectangle--${modifier}`}>
            <div className="notification-text">
              <span>&nbsp;&nbsp;{text}</span>
            </div>
          </div>
        </div>
        {this.timeout()}
      </div>
    );
  }
}

export default MessageFlash;