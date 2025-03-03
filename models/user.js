const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  post: {
    type: String,
  },
  date: {
    type: Date,
  }
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [postSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
