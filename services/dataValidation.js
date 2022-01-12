module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      res.send({ message: err.details[0].message });
    }
  };
};
