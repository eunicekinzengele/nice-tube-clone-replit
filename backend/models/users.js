const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  facebook: {
    type: String,
    default: "https://m.facebook.com/eunice.kinzengele?eav=AfZmLe7xDlTGNourRXRvSyRYzLjLv0YXsVa2195Fd_Nq8F24yOgmcrZWNx7waDT12ao&paipv=0",
  },
  email: {
    type: String,
    default: "https://mail.google.com/mail/u/0/#inbox?compose=new",
  },
  tiktok: {
    type: String,
    default: "tiktok.com/@keunice07",
  },
  linkedin: {
    type: String,
    default: "https://www.linkedin.com/in/eunice-sophia-kinzengele-a44130242/",
  },
});

module.exports = mongoose.model("Users", userSchema);
