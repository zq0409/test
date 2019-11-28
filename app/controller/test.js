'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const { ctx } = this;
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 15000);
  })
    


 
    ctx.body =await "hi,eggtest";
      
  }

}

module.exports = TestController;
