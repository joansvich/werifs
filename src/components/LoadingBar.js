import React from 'react';
import './loadingbar.css';

//REDUX
import { connect } from 'react-redux';

function LoadingBar(props) {
  const statusLength = props.participationsPaid.length;
  const statusWidth = statusLength * 100 / 20;
  console.log(statusWidth);
  return (
    <>
      <div className="loading-bar">
        <div>
          {statusWidth < 25 ? <img className="lock" src="./images/iphone-lock.png" alt="iphone" /> : <img src="./images/iphone-unlock.png" alt="" />}
          {statusWidth < 60 ? <img className="lock" src="./images/macbook-lock.png" alt="iphone" /> : <img src="./images/macbook-unlock.png" alt="" />}
          {statusWidth < 100 ? <img  className="lock" src="./images/seat-ibiza-lock.png" alt="iphone" /> : <img src="./images/seat-ibiza-unlock.png" alt="" />}
        </div>
        <div className="progress-bar">
          <div className="status-parent" style={{ width: `${statusWidth}%` }}>
            <div className="status-child"></div>
          </div>
        </div>
      </div>
    </>
  );

}

const mapStateToProps = state => ({
  participationsPaid: state.participations.participationsPaid
})

export default connect(mapStateToProps, null)(LoadingBar);