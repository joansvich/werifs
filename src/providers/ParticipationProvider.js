import React, { Component } from 'react';
import participationService from '../lib/participation-service';

const MyContext = React.createContext();

export const withParticipation = (Comp) => {
  return class ParticipationConsumer extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {(value) => (
            <Comp
              participationState={value.participationState}
              getParticipation={value.getParticipation}
              addParticipation={value.addParticipation}
              setAmount={value.setAmount}
              changeShowCard={value.changeShowCard}
              changeGameMode={value.changeGameMode}
              deleteParticipation={value.deleteParticipation}
              updateParticipation={value.updateParticipation}
              {...this.props}
            />
          )
          }
        </MyContext.Consumer>
      )
    }
  }
}

class ParticipationProvider extends Component {

  state = {
    listParticipation: [],
    showCard: false,
    gameMode: false,
    amount: 0
  }

  getParticipation = () => {
    return participationService.list()
      .then((listParticipation) => {
        this.setState({
          listParticipation
        })
      })
      .catch((err) => console.log(err));
  }

  deleteParticipation = (_id) => {
    participationService.delete(_id)
      .then((data) => {
        console.log(data);
        this.getParticipation();
      })
      .catch((err) => console.log(err));
  }

  addParticipation = (newParticipation) => {
    participationService.create(newParticipation)
      .then((data) => {
        this.getParticipation();
        this.setState({
          showCard: true,
        })
      })
  }

  updateParticipation = (body) => {
    return participationService.update(body)
      .then((data) => {
        this.getParticipation();
        this.setState({
          showCard: true,
        })
      })
      .catch(error => console.log(error))
  }

  changeShowCard = () => {
    this.setState({
      showCard: !this.state.showCard
    })
  }

  changeGameMode = () => {
    this.setState({
      gameMode: !this.state.gameMode
    })
  }

  setAmount = (amount) => {
    this.setState({
      amount
    })
  }

  componentDidMount() {
    this.getParticipation();
  }

  render() {
    return (
      <MyContext.Provider value={{
        participationState: this.state,
        getParticipation: this.getParticipation,
        setAmount: this.setAmount,
        addParticipation: this.addParticipation,
        changeShowCard: this.changeShowCard,
        changeGameMode: this.changeGameMode,
        updateParticipation: this.updateParticipation,
        deleteParticipation: this.deleteParticipation
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default ParticipationProvider;