import React from 'react';
import './cart.css'
import CardCart from './CardCart';

//REDUX
import { connect } from 'react-redux';
import { changeShowCard } from '../actions/participationActions'

function Cart(props) {
  const { showCard, participations } = props

  // const handleClickClose = () => {
  //   props.changeShowCard();
  // }

  const renderList = () => {
    if (participations.length > 0) {
      const listNoPaid = participations.filter((participation) => {
        if (!participation.paid) {
          return participation
        }
      })
      if (listNoPaid.length > 0) {
        console.log(listNoPaid)
        return listNoPaid.map((participation, id) => {
          return <CardCart
            key={`id-${id}`}
            part={participation}
          />
        })
      } else {
        return <div>No hay coches en la lista</div>
      }

    }
  }

  // const buttonClose = () => {
  //   if (participations.length > 0) {
  //     return <button className="cartbox-button-close" onClick={handleClickClose}>X</button>
  //   }
  // }

  return (
    <div>
      <div>
        {showCard && <>
          <div className="cartbox">
            {/* {buttonClose()} */}
            {renderList()}
          </div>
        </>}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  participations: state.participations.participations,
  showCard: state.participations.showCard
})

// export default withParticipation(Cart);
export default connect(mapStateToProps, { changeShowCard })(Cart)