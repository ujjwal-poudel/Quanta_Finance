// models/auth.models.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  groceries: [{
    expenditure: { type: Number },
    date: { type: Date },
    title: { type: String }
  }],
  clothing: [{
    expenditure: { type: Number },
    date: { type: Date },
    title: { type: String }
  }],
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// Compare entered password with the hashed password in the database
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
