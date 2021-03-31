import axios from '../utils/axios';

const solicitacoesService = {
  getAll() {
    return new Promise((resolve, reject) => {
      axios
        .get('solicitacoes')
        .then((response) => {
          const { solicitacoes } = response.data;

          resolve(solicitacoes);
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
        .get(`solicitacoes/get/${id}`)
        .then((response) => {
          const { solicitacao } = response.data;

          resolve(solicitacao);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  updateStatus(id, status) {
    return new Promise((resolve, reject) => {
      axios
        .put(`solicitacoes/update-status/${id}`, { status })
        .then((response) => {
          const { solicitacao } = response.data;

          resolve(solicitacao);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  }
};

export default solicitacoesService;
