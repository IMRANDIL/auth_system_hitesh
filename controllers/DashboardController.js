exports.dashboardController = async (req, res) => {
  res.send(`${req.user.email} dashboard`);
};
