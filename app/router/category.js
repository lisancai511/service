'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/api/category', controller.category.list);
  router.get('/api/category/:id', controller.category.get);
  router.post('/api/category', controller.category.add);
  router.put('/api/category/:id', controller.category.update);
  router.delete('/api/category/:id', controller.category.remove);
};
