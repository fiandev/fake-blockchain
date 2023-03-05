const device = require('express-device');
const Express = require("express");
const clear = require("clear");

const app = new Express();

const Router = require('./Router');
const Crypto = require('./Crypto');

class Server {
    /*
     * @param {String} PORT
     * @return {void}
     */
    constructor ({ PORT = 3000, SOCKET_PORT = 3001 }) {
        this.PORT = PORT;
        this.SOCKET_PORT = SOCKET_PORT;
        
        app.use(Express.static(__dirname + "/public"));
        app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            next();
        });
        app.use(Express.json());
        app.use(device.capture());
        
        // register router
        //app.use('/', Router.init());
        
        // not found routes
        app.use('*', (req ,res) =>{
            res.send({
                code: 404,
                success: false,
                status: "failed"
            });
        });
        
        app.use(Express.urlencoded({ extended: true }));
        
    }
    
    /*
     * @return {void}
     */
    start () {
        app.listen(this.PORT, () => {
            clear()
            console.log(`Server running on port ${this.PORT}`);
        });
        
        Crypto.record();
        Crypto.randomize();
    }
}


module.exports = Server;