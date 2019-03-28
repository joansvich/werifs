import React from 'react';
import { withParticipation } from '../providers/ParticipationProvider';
import './cart.css'

function Cart(props) {
  const { showCard } = props.participationState
  
  return (
    <div>
      <div>
        {showCard && <>
          <div className="cartbox">
            <h1>BOOM</h1>
          </div>
        </>}
      </div>
    </div>
  );
}
export default withParticipation(Cart);