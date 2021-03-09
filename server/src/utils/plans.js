const plans = {
  premium: {
    name: 'Premium',
    projectsNum: 0,
    expiresTime: 30,
  },
  complete: {
    name: 'Completo',
    projectsNum: 10,
    expiresTime: 30,
  },
  basic: {
    name: 'Básico',
    projectsNum: 5,
    expiresTime: 30,
  },
  free: {
    name: 'Grátis',
    projectsNum: 1,
    expiresTime: 30,
  },
};

module.exports = {
  get: (name) => plans[name],
  isValid: (user) => {
    if (!user.plan) return false;

    const { signatureDate, key } = user.plan;

    const today = new Date();
    const expiresDate = new Date(signatureDate);

    expiresDate.setDate(expiresDate.getDate() + plans[key].expiresTime);

    return expiresDate < today;
  },
};
