'use strict';

const Service = require('egg').Service;
class ContantService extends Service {
  async list(filter, limit = 10, offset = 0) {
    const ctx = this.ctx;
    const [list, total] = await Promise.all([
      ctx.model.Contant.find(filter).skip(offset).limit(limit)
      .lean()
      .exec(),
      ctx.model.Contant.countDocuments(filter)
      .lean()
      .exec(),
    ]);
    return {
      list,
      total,
      code: 0
    };
  }
  async get(id) {
    const ctx = this.ctx;
    const doc = await ctx.model.Contant.findOne({
      id
    }).lean().exec();
    return {
      code: 0,
      data: doc
    };
  }
  async add(data = {}) {
    const ctx = this.ctx;
    const schoolId = ctx.request.header.schoolid;
    const exist = await this.nameExist(data.name, data.id);
    if (exist) {
      return {
        code: 1,
        msg: '角色名重复',
      };
    }
    const ContantModel = ctx.model.Contant({
      id: ctx.helper.generateId(),
      name: data.name,
      auth: data.auth,
      desc: data.desc,
      schoolId
    });
    await ContantModel.save();
    return {
      success: true,
      msg: '添加成功',
      code: 0
    };
  }
  async update(id, data = {}) {
    const ctx = this.ctx;
    const ContantModel = await ctx.model.Contant.findOne({
      id
    }).exec();
    if (!ContantModel) {
      return {
        code: 1,
        msg: 'Contant不存在',
      };
    }
    // const exist = await this.nameExist(data.name, data._id);
    // if (exist) {
    //   return {
    //     code: 1,
    //     msg: '角色名重复',
    //   };
    // }
    if (typeof data.name !== 'undefined') {
      ContantModel.name = data.name;
    }
    if (typeof data.desc !== 'undefined') {
      ContantModel.desc = data.desc;
    }
    if (typeof data.desc !== 'undefined') {
      ContantModel.auth = data.auth;
    }
    ContantModel.updateTime = new Date();
    await ContantModel.save();
    return {
      success: true,
      msg: '修改成功',
      code: 0
    };
  }
  async remove(id) {
    const ctx = this.ctx;
    const Contant = await ctx.model.Contant.findOne({
      id
    }).exec();
    if (!Contant) {
      return {
        code: 1,
        msg: '该角色不存在',
      };
    }
    await Contant.remove();
    return {
      success: true,
      msg: '删除成功',
      code: 0,
    };
  }
  async nameExist(name, id) {
    const ctx = this.ctx;
    const filter = {
      name,
    };
    if (id) {
      filter.id = {
        $ne: id
      };
    }
    const Contant = await ctx.model.Contant.findOne(filter).lean().exec();
    return !!Contant;
  }
}
module.exports = ContantService;
