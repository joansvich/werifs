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
    if(listParticipation.length>0){
      return listParticipation.map((participation, id) => {
        return (
            <CardCart
              key={`id-${id}`}
              part={participation}
            />
        )
      })
    }
  }
  const buttonClose = () => {
    if(listParticipation.length>0){
      return <button className="cartbox-button-close" onClick={handleClickClose}>X</button>
    }
  }

  return (
    <div>
      <div>
        {showCard && <>
          <div className="cartbox">
            {buttonClose()}
            {renderList()}
          </div>
        </>}
      </div>
    </div>
  );
}
export default withParticipation(Cart);