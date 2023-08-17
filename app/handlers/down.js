import {
    COMMAND_DOWN,
    INFO_TRANSLATE_DOWN,
  } from '../commands/index.js';
  import Context from '../context.js';
  import { updateHistory } from '../history/index.js';
  
  /**
   * @param {Context} context
   * @returns {boolean}
   */
  const check = (context) => context.hasCommand(COMMAND_DOWN);
  
  /**
   * @param {Context} context
   * @returns {Context}
   */
  const exec = (context) => check(context) && (
    async () => {
      //console.log(context);
      updateHistory(context.id, (history) => history.erase());
      try {
        const buttons = [...INFO_TRANSLATE_DOWN];
        context.pushTemplate('想要將內容翻譯成哪種語言？', buttons);
      } catch (err) {
        context.pushError(err);
        console.log(err);
      }
      //console.log(context);
      return context;
    }
  )();
  
  export default exec;
  