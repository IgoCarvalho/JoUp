import axios from "../utils/axios";

const userServices = {
  contractPlan(plan) {
    return new Promise((resolve, reject) => {
      axios
        .put('users/update-plan', { plan })
        .then((response) => {
          const { user } = response.data;

          resolve(user);
        })
        .catch((error) => {
          const message = error.response.data.message;
          console.log(message);

          reject(message);
        });
    });
  },
  
};

export default userServices;