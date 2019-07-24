import axios from 'axios';


class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  signup(user) {
    const { username, password, adress, phone, email } = user;
    return this.auth.post('/auth/signup', { username, password, adress, phone, email })
      .then(({ data }) => data);
  }

  update(user) {
    const { username, password, adress, phone, email, imageUrl } = user;
    return this.auth.put('/profile/', { username, password, adress, phone, email, imageUrl })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  async me(props) {
    const user = await this.auth.get('/auth/me')
    return user;
  }
}

const authService = new AuthService();

export default authService;
