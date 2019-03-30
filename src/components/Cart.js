import React from 'react';
import { withParticipation } from '../providers/ParticipationProvider';
import './cart.css'
import CardCart from './CardCart';
import { Link } from 'react-router-dom';



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
            <Link to="/game" ><button className="cartbox-button" onClick={handleClickClose}>A jugar!</button></Link>
          </div>
        </>}
      </div>
    </div>
  );
}
export default withParticipation(Cart);