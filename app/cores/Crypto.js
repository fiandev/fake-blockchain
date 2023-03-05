const clear = require("clear");
const { Token, Asset } = require("../database/models/");
const { message } = require("../libraries/Message");

const indicators = {
  static: "info",
  up: "success",
  down: "danger",
}

class Crypto {
  static async getAllAssets () {
    return await Asset.findAll();
  }
  
  static record () {
    setInterval( async () => {
      let assets = await this.getAllAssets();
      
      if (global.assets) {
        assets.map( async (asset, i) => {
          let lastPrice = global.assets[i].price;
          let status = "static";
          
          if (asset.price > lastPrice) status = "up";
          if (asset.price < lastPrice) status = "down";
          
          if (status !== "static") {
            let newRocord = await Asset.update({
              lastPrice: lastPrice,
              status: status
            }, {
              where: {
                id: asset.id
              }
            });
            
          }
        })
        global.assets = assets;
      } else {
        global.assets = assets;
      }
      
      clear();
      assets.map(asset => {
        let indicator = indicators[asset.status];
        let difference = message[indicator](` ${asset.price - asset.lastPrice } %`);
        
        let name = message.generate(asset.name, "#ffffff");
        let price = message.generate(asset.price.toLocaleString(), "#ffffff");
        let lastPrice = message[indicator](asset.lastPrice.toLocaleString());
        
        console.log(`${ name } : ${ price } | ${ lastPrice } => ${ difference }`)
      })
      
    }, 1000);
  }
  static randomize () {
    setInterval( async () => {
      let assets = await this.getAllAssets();
      await Asset.update({
        price: assets[Math.floor(Math.random() * assets.length)].price + Math.floor(Math.random() * (100 - 1) + 100) / 100
      }, {
        where: {
          id: assets[Math.floor(Math.random() * assets.length)].id
        }
      });
      
    }, 1000)
  }
}

module.exports = Crypto;