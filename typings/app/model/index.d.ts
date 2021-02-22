// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory = require('../../../app/model/category');
import ExportCommodity = require('../../../app/model/commodity');
import ExportContant = require('../../../app/model/contant');
import ExportEvaluate = require('../../../app/model/evaluate');
import ExportOrder = require('../../../app/model/order');
import ExportRole = require('../../../app/model/role');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Category: ReturnType<typeof ExportCategory>;
    Commodity: ReturnType<typeof ExportCommodity>;
    Contant: ReturnType<typeof ExportContant>;
    Evaluate: ReturnType<typeof ExportEvaluate>;
    Order: ReturnType<typeof ExportOrder>;
    Role: ReturnType<typeof ExportRole>;
    User: ReturnType<typeof ExportUser>;
  }
}
