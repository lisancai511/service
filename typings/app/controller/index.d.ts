// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory = require('../../../app/controller/category');
import ExportCommodity = require('../../../app/controller/commodity');
import ExportContant = require('../../../app/controller/contant');
import ExportInit = require('../../../app/controller/init');
import ExportLogin = require('../../../app/controller/login');
import ExportRole = require('../../../app/controller/role');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    category: ExportCategory;
    commodity: ExportCommodity;
    contant: ExportContant;
    init: ExportInit;
    login: ExportLogin;
    role: ExportRole;
    user: ExportUser;
  }
}
