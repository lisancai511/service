'use strict';
// 商品

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CommoditySchema = new Schema({
    id: String,
    name: String,
    newPrice: Number,
    imgAddress: String,
    describe: String,
    title: String,
    subTitle: String,
    imgArr: String,
    categoryId: String,
    oldPrice: Number,
    stock: Number,
    contantId: String,
    company: String,
    buyNumber: Number,
  });
  return mongoose.model('Commodity', CommoditySchema);
};