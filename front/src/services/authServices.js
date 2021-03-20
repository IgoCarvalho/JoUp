import axios from '../utils/axios';

const authService = {
  login(credential, password) {
    return new Promise((resolve, reject) => {
      axios
        .post('users/login', { credential, password })
        .then((response) => {
          const { user, token } = response.data;
          this.setToken(token);
          this.setHeaders();

          resolve(user);
        })
        .catch((error) => {
          const message = error.response;
          console.log(message);

          reject(message);
        });
    });
  },
  silentLogin() {
    this.setHeaders();

    return new Promise((resolve, reject) => {
      axios
        .post('users/me')
        .then((response) => {
          const { user } = response.data;

          resolve(user);
        })
        .catch(() => {
          this.removeToken();
          this.removeHeaders();

          reject();
        });
    });
  },
  signUp(userData) {
    return new Promise((resolve, reject) => {
      axios
        .post('users/signup', userData)
        .then((response) => {
          const { user, token } = response.data;
          this.setToken(token);
          this.setHeaders();

          resolve(user);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  logout() {
    this.removeToken();
    this.removeHeaders();
  },
  isAuthenticated() {
    const hasToken = Boolean(this.getToken());

    return hasToken;
  },

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  },
  getToken() {
    const token = JSON.parse(localStorage.getItem('token'));

    return token;
  },
  removeToken() {
    localStorage.removeItem('token');
  },
  setHeaders() {
    const token = this.getToken();
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  removeHeaders() {
    axios.defaults.headers.Authorization = undefined;
  }
};

export default authService;
