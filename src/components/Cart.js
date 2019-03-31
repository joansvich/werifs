import React from 'react';
import { withParticipation } from '../providers/ParticipationProvider';
import './cart.css'
import CardCart from './CardCart';




function Cart(props) {
  const { showCard, listParticipation } = props.participationState
  const handleClickClose = () => {
    props.changeShowCard();
  }
  const renderList = () => {
    return listParticipation.map((participation, id) => {
      return (
          <CardCart
            key={`id-${id}`}
            part={participation}
          />
      )
    })
  }

  return (
    <div>
      <div>
        {showCard && <>
          <div className="cartbox">
            <button className="cartbox-button-close" onClick={handleClickClose}>X</button>
            {renderList()}
          </div>
        </>}
      </div>
    </div>
  );
}
export default withParticipation(Cart);