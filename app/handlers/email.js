import {
    COMMAND_EMAIL,
  } from '../commands/index.js';
  import Context from '../context.js';
  import { updateHistory } from '../history/index.js';
  
  /**
   * @param {Context} context
   * @returns {boolean}
   */
  const check = (context) => context.hasCommand(COMMAND_EMAIL);
  
  /**
   * @param {Context} context
   * @returns {Context}
   */
  const exec = (context) => check(context) && (
    async () => {
      //console.log(context);
      updateHistory(context.id, (history) => history.erase());
      try {
        //buttons.splice(2, 0, context.source.bot.isActivated ? COMMAND_BOT_DEACTIVATE : COMMAND_BOT_ACTIVATE);
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
  