import React, { Component } from 'react';
import { HashLoader } from 'react-spinners';

class Loading extends Component {

  render() {
    const override = {
      display: 'block',
      margin: '0 auto',
      padding: '50px'
    };
    return (
      <>
        <HashLoader
          css={override}
          size={200}
          color={'#a4d0ff'}
          loading={true}
        />
      </>
    );
  }
}

export default Loading;