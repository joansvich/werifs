import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.onClick} className="compButton">{this.props.text}</button>
      </>
    );
  }
}

export default Button;