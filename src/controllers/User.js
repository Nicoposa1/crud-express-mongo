const UserModel = require("../models/User");

exports.create = async (req, res) => {
  if (
    !req.body.email &&
    !req.body.firstName &&
    !req.body.lastName &&
    !req.body.phone
  ) {
    return res.status(400).send({
      message: "User content can not be empty",
    });
  }

  const user = new UserModel({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
  });

  await user
    .save()
    .then((data) => {
      res.send({
        message: "User created successfully!!",
        user: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      });
    });

  exports.findAll = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.send(users);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users",
      });
    }
  };

  exports.findOne = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userId);
      res.status(200).send(user);
    } catch (err) {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id" + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with id" + req.params.userId,
      });
    }
  };


  

};
