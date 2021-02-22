'use strict';
// 评价


module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const EvaluateSchema = new Schema({
    id: String,
    userId: String,
    content: String,
    commodityId: String,
    score: String,
    userName: String,
  });
  return mongoose.model('Evaluate', EvaluateSchema);
};