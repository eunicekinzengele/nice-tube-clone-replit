const User = require("../models/users");

exports.createAUser = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        const user = new User({
          ...req.body
        });
        user
          .save()
          .then((data) => {
            res.status(201).json({ data, message: "user saved" });
          })
          .catch((error) => {
            res.status(400).json({ error });
          });
      } else {
        res.status(200).json({ user });
      }
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

exports.getOneUser = (req, res, next) => {
  User.findOne({
    _id: req.params.id,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.updateOneUser = (req, res, next) => {
  const user = new User({
    _id: req.params.id}, { 
        ...req.body, _id: req.params.id
    });
  
  User.updateOne({ _id: req.params.id }, user)
    .then(() => {
      res.status(201).json({
        message: "User updated successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};