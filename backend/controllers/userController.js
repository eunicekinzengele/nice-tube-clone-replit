const User = require("../models/users");

exports.createAUser = async (req, res, next) => {
  try {
      const user= await User.findOne({email: req.body.email})
      if (user === null){
        const newUser= new User({
          imageUrl: req.body.imageUrl,
          name: req.body.name,
          facebook: req.body.facebook,
          email: req.body.email,
          tiktok: req.body.tiktok,
          linkedin: req.body.linkedin,
        });
        await newUser.save()
        return res.status(201).send({data: newUser, message: "user saved" }) 
         
      }else{
        res.status(200).send ({data:user})
      }

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

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
  const user = new User(
    {
      _id: req.params.id,
    },
    {
      ...req.body,
      _id: req.params.id,
    }
  );

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
