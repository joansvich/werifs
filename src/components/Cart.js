import React from 'react';
import { withParticipation } from '../providers/ParticipationProvider';
import './cart.css'
import CardCart from './CardCart';

//REDUX
import { connect } from 'react-redux';
import { changeShowCard } from '../actions/participationActions'

function Cart(props) {
  console.log(props);
  const { showCard, listParticipation } = props

  const handleClickClose = () => {
    props.changeShowCard();
  }
  const renderList = () => {
    if (listParticipation.length > 0) {
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
    if (listParticipation.length > 0) {
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

const mapStateToProps = state => ({
  participations: state.participations.participations
})

// export default withParticipation(Cart);
export default connect(mapStateToProps, { changeShowCard })(Cart)