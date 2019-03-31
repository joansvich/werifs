import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <>
        {this.props.done ? <>
          <button disabled onClick={this.props.onClick} className="compButton--done">{this.props.text}</button>
        </> : <>
            <button onClick={this.props.onClick} className="compButton">{this.props.text}</button>
          </>}
      </>
    );
  }
}

export default Button;