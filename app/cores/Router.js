const Express = require("express");
const log = require("../middlewares/log");

/*
 * example require controller
 */
const router = Express.Router();
class Router {
    static init() {
        return [
            
          ];
    }
    
    static get(...args) {
        // add middleware log
        args.push(log);
        return router.get(...args);
    }
    
}

module.exports = Router;