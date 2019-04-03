import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <>
        <button disabled={this.props.disabled} value={this.props.value} onClick={this.props.onClick} className={`compButton compButton--${this.props.type}`}>{this.props.text}</button>
      </>
    );
  }
}

export default Button;