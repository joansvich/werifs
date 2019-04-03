import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <>
        <button value={this.props.value} onClick={this.props.onClick} className={`compButton compButton--${this.props.type}`}>{this.props.text}</button>
      </>
    );
  }
}

export default Button;