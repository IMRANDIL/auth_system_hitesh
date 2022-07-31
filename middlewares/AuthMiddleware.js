const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.authMiddleware = async (req, res, next) => {
  const token =
    req.header("Authorization")?.replace("Bearer ", "") ||
    req.cookies?.token ||
    req.body?.token;

  if (!token) {
    return res.status(403).json({ msg: "Unauthorized,token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ msg: "Unauthorized,Invalid Token" });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "unAuthorized,Invalid Token" });
  }
};
