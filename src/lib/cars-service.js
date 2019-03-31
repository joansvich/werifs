import axios from 'axios';

class CarsService {
  constructor() {
    this.cars = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  list() {
    return this.cars.get('/cars/')
      .then(({ data }) => {
        return data
      });
  }

  create(car) {
    const { name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl, price1, price5, price10 } = car;
    return this.cars.post('/cars/create', { name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl, price1, price5, price10 })
      .then(({ data }) => data);
  }

}


const carsService = new CarsService();

export default carsService;