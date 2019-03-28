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
      .catch((err)=>console.log(err));
  }

  addParticipation = (newParticipation) => {
    participationService.create(newParticipation)
      .then((data) => {
        this.getParticipation();
        this.setState({
          showCard: true
        })
      })
  }
  render() {
    return (
      <MyContext.Provider value={{
        participationState: this.state,
        addParticipation: this.addParticipation
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default ParticipationProvider;