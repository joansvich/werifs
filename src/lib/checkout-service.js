import axios from 'axios';


class CheckoutService {
  constructor() {
    this.checkout = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  create(amount, token, listParticipation) {
    return this.checkout.post('/checkout/', { amount:amount*100, token, listParticipation })
      .then(({ data }) => {
        return data
      });
  }
}


const checkoutService = new CheckoutService();

export default checkoutService;