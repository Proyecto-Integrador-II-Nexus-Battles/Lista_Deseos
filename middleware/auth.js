import constants from '../config/constants';

function authOnly(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Es necesario iniciar sesión';
    res.redirect(constants.LOGIN_URL);
  }
}

export { authOnly };
