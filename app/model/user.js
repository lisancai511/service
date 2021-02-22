'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    id: String,
    name: String,
    userPhone: String,
    userAddress: [
      {
        address: String,
        name: String,
        phone: String
      }
    ],
    coordinate: String,
    integral: Number,
    balance: Number,
    wxId: String,
    wxImg: String,
    wxName: String,
  });
  return mongoose.model('User', UserSchema);
};