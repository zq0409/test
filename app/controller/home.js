'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let test=gg;
 
    ctx.body =await "hi,egg11111";
     
  
  }

}

module.exports = HomeController;
