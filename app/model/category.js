'use strict';
// 分类

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CategorySchema = new Schema({
    id: String,
    name: String,
    img: String,
    describe: String,
  });
  return mongoose.model('Category', CategorySchema);
};