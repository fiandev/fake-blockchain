const chalk = require("chalk");

class Message {
   generate(text, color, option = "normal") {
    return option == "normal" ? chalk.hex(color)(text) : chalk.hex(color)[option](text);
  }
  
   console (text) {
    console.log(text);
  }
  
   danger (text) {
    return this.generate(text, "#f93b00");
  }
  
   info (text) {
    return this.generate(text, "#0798ff");
  }
  
   warning (text) {
   return this.generate(text, "#feff08");
  }
  
   success (text) {
    return this.generate(text, "#08b835");
  }
}

const message = new Message();

module.exports = {
  Message,
  message
};