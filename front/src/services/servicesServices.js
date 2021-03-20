import axios from '../utils/axios';

const servicesService = {
  createService(serviceData) {
    return new Promise((resolve, reject) => {
      axios
        .post('services', serviceData)
        .then((response) => {
          const { service } = response.data;

          resolve(service);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  getAll() {
    return new Promise((resolve, reject) => {
      axios
        .get('services')
        .then((response) => {
          const { services } = response.data;

          resolve(services);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  getOne(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`services/get/${id}`)
        .then((response) => {
          const { service } = response.data;

          resolve(service);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  update(id, serviceData) {
    return new Promise((resolve, reject) => {
      axios
        .put(`services/update/${id}`, serviceData)
        .then((response) => {
          const { service } = response.data;

          resolve(service);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  }
};

export default servicesService;
