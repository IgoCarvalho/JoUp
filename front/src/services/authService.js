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
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  signUp() {},

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  },
  getToken() {
    const token = JSON.parse(localStorage.getItem('token'));

    return token;
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
