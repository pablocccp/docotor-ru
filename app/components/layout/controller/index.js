const Controller = (req, res, next) => {
  req.appData.layout = {
    user: req.sessionData.user.name,
    availableOperations: req.sessionData.availableOperations,
    keyYesterday: req.sessionData.keyYesterday,
    keyToday: req.sessionData.keyToday,
    role: req.sessionData.role,
    version:  process.env.npm_package_version,
    hasToChangePassword: req.sessionData.hasToChangePassword || false, 
  };
  next();
};

export default Controller;