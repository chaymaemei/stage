const User = require("../models/userModel");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ success: true, users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to fetch users" });
    }
  },
};

module.exports = userController;
