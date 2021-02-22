'use strict';

const Service = require('egg').Service;
class CategoryService extends Service {
  async list(filter, limit = 10, offset = 0) {
    const ctx = this.ctx;
    const [list, total] = await Promise.all([
      ctx.model.Category.find(filter).skip(offset).limit(limit)
      .lean()
      .exec(),
      ctx.model.Category.countDocuments(filter)
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
    const doc = await ctx.model.Category.findOne({
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
    const CategoryModel = ctx.model.Category({
      id: ctx.helper.generateId(),
      name: data.name,
      auth: data.auth,
      desc: data.desc,
      schoolId
    });
    await CategoryModel.save();
    return {
      success: true,
      msg: '添加成功',
      code: 0
    };
  }
  async update(id, data = {}) {
    const ctx = this.ctx;
    const CategoryModel = await ctx.model.Category.findOne({
      id
    }).exec();
    if (!CategoryModel) {
      return {
        code: 1,
        msg: 'Category不存在',
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
      CategoryModel.name = data.name;
    }
    if (typeof data.desc !== 'undefined') {
      CategoryModel.desc = data.desc;
    }
    if (typeof data.desc !== 'undefined') {
      CategoryModel.auth = data.auth;
    }
    CategoryModel.updateTime = new Date();
    await CategoryModel.save();
    return {
      success: true,
      msg: '修改成功',
      code: 0
    };
  }
  async remove(id) {
    const ctx = this.ctx;
    const Category = await ctx.model.Category.findOne({
      id
    }).exec();
    if (!Category) {
      return {
        code: 1,
        msg: '该角色不存在',
      };
    }
    await Category.remove();
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
    const Category = await ctx.model.Category.findOne(filter).lean().exec();
    return !!Category;
  }
}
module.exports = CategoryService;
