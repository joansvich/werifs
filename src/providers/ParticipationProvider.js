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
              addParticipation={value.addParticipation}
              changeShowCard={value.changeShowCard}
              deleteParticipation={value.deleteParticipation}
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
  }

  componentDidMount() {
    this.getParticipation();
  }

  getParticipation = () => {
    participationService.list()
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

  changeShowCard = () => {
    this.setState({
      showCard: !this.state.showCard
    })
  }

  render() {
    return (
      <MyContext.Provider value={{
        participationState: this.state,
        addParticipation: this.addParticipation,
        changeShowCard: this.changeShowCard,
        deleteParticipation: this.deleteParticipation
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default ParticipationProvider;