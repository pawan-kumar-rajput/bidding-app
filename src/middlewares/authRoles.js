const authRoles = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    return res.status(403).send("Access Denied");
  next();
};

export default authRoles;
