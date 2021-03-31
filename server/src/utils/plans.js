const plans = {
  premium: {
    name: 'Premium',
    projectsNum: -1,
    servicesNum: -1,
    expiresTime: 30,
    socialMediaLink: true,
  },
  complete: {
    name: 'Completo',
    projectsNum: 10,
    servicesNum: 10,
    expiresTime: 30,
    socialMediaLink: false,
  },
  basic: {
    name: 'Básico',
    projectsNum: 3,
    servicesNum: 5,
    expiresTime: 30,
    socialMediaLink: false,
  },
  free: {
    name: 'Grátis',
    projectsNum: 1,
    servicesNum: 1,
    expiresTime: 30,
    socialMediaLink: false,
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
  populate(user) {
    if (!user.plan) return user;

    user.plan = { ...user.plan, ...this.get(user.plan.key) };

    return user;
  },
};
