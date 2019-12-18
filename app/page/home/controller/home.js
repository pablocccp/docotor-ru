
const Controller = (req, res, next) => {
  req.appData = {};
  next();
};

export { Controller } ;
export default Controller;