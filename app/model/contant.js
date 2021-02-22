'use strict';
// 租户

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ContantSchema = new Schema({
    // 租户
    id: String,
    name: String,
    coordinate: String,
    bossName: String,
    bossPhone: String,
    address: String,
    token: String,
    updateTime: {
      type: Date,
      default: new Date()
    },
    updateTime: {
      type: Date,
      default: new Date()
    },
  });
  return mongoose.model('Contant', ContantSchema);
};