import React, { Component } from 'react';
import './input.css'

class Input extends Component {
  render() {
    const { text, name, onChange } = this.props;
  return (
    <div className="component-input">
      <input className="component-input--input" type="text" name={name} value={name} onChange={(e)=>onChange(e)} />
      <label className="label-component-input" >{text}</label>
    </div>
  );
}
}

export default Input;