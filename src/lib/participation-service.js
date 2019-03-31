import axios from 'axios';


class ParticipationService {
  constructor() {
    this.participation = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  list(){
    return this.participation.get('/participation/')
      .then(({ data }) => {
        return data
      });
  }

  create(participation) {
    const { idCar, numParticipations } = participation;
    return this.participation.post('/participation/create', { idCar, numParticipations })
      .then(({ data }) => data);
  }

  update(participation) {
    const {_id, position} = participation;
    return this.participation.put('/participation/', {_id, position})
      .then(({data})=> data)
  }

  delete(_id) {
    return this.participation.post('/participation/delete',{_id})
      .then((data)=>{
        return data
      })
  }
}


const participationService = new ParticipationService();

export default participationService;