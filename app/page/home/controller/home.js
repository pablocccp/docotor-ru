import Case from '../../../../services/user-case';  

const Controller = (req, res, next) => {
  Case(req.query, req.sessionData.token).then((response) => {
    req.appData = response.data;
    next();
  }).catch((error) => {
    console.log('Error', error.message);
    req.appData = {};
    next();
  });
};

export { Controller } ;
export default Controller;