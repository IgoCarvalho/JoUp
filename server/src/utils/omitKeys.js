module.exports = (entity, ...keys) => {
  const obj = entity.toObject();

  const result = Object.keys(obj).reduce((o, k) => {
    if (keys.includes(k)) {
      return o;
    }

    o[k] = entity[k];
    return o;
  }, {});

  return result;
};
