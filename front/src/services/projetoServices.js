import axios from '../utils/axios';

const projetosService = {
  create(projetoData) {
    return new Promise((resolve, reject) => {
      axios
        .post('projetos', projetoData)
        .then((response) => {
          const { project } = response.data;

          resolve(project);
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
        .get('projetos')
        .then((response) => {
          const { projects } = response.data;

          resolve(projects);
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
        .get(`projetos/get/${id}`)
        .then((response) => {
          const { project } = response.data;

          resolve(project);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  update(id, projetoData) {
    return new Promise((resolve, reject) => {
      axios
        .put(`projetos/update/${id}`, projetoData)
        .then((response) => {
          const { project } = response.data;

          resolve(project);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  // delete(id) {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .delete(`services/delete/${id}`)
  //       .then((response) => {
  //         const { services } = response.data;

  //         resolve(services);
  //       })
  //       .catch((error) => {
  //         const message = error.response.data.message;
  //         console.log(message);

  //         reject(message);
  //       });
  //   });
  // }
};

export default projetosService;
