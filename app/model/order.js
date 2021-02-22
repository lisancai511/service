'use strict';
// 订单


module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const OrderSchema = new Schema({
    id: String,
    price: Number,
    address: String,
    createTime: {
      type: Date,
      default: new Date()
    },
    commodityIds: [String],
    contantId: String,
    status: String,
    orderPeople: String,
    orderPhone: String,
    orderPhone: String
  });
  return mongoose.model('Order', OrderSchema);
};