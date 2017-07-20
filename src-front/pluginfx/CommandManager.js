import { ICommandManager } from '../ifaces/ICommandManager'

class CommandManager extends ICommandManager {
  constructor() {
    super();
    this._cmds = [];
    if (!window.CommandManager) {
      window.CommandManager = this;
    }
  }

  registerCommand(text, fun) { 
    this._cmds.push({
      text: text,
      fun: fun
    });
  }

  getCommands() {
    var res  = [];
    for (var i = 0; i != this._cmds.length; ++i) {
      res.push({
        text: this._cmds[i].text,
        fun: this._cmds[i].fun
      });
    }
    return res;
  }
}

export default new CommandManager();

