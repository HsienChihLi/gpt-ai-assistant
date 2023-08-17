import {
  //COMMAND_BOT_ACTIVATE,
  COMMAND_SYS_WRITE,
  //COMMAND_BOT_DEACTIVATE,
  //GENERAL_COMMANDS,
  INFO_WRITTING,
} from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const check = (context) => context.hasCommand(COMMAND_SYS_WRITE);

/**
 * @param {Context} context
 * @returns {Context}
 */
const exec = (context) => check(context) && (
  async () => {
    //console.log(context);
    updateHistory(context.id, (history) => history.erase());
    try {
      const buttons = [...INFO_WRITTING];
      //buttons.splice(2, 0, context.source.bot.isActivated ? COMMAND_BOT_DEACTIVATE : COMMAND_BOT_ACTIVATE);
      context.pushTemplate(COMMAND_SYS_WRITE.label, buttons);
      //console.log(INFO_WRITTING);
    } catch (err) {
      context.pushError(err);
      console.log(err);
    }
    //console.log(context);
    return context;
  }
)();

export default exec;
