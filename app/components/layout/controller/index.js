const Controller = (req, res, next) => {
  req.appData.layout = {
  };
  next();
};

export default Controller;