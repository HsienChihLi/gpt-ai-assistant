import {
    COMMAND_SYS_MORELETTER,
    GENERAL_COMMANDS,
    MORE_LETTER,
  } from '../commands/index.js';
  import Context from '../context.js';
  import { updateHistory } from '../history/index.js';
  
  /**
   * @param {Context} context
   * @returns {boolean}
   */
  const check = (context) => context.hasCommand(COMMAND_SYS_MORELETTER);
  
  /**
   * @param {Context} context
   * @returns {Context}
   */
  const exec = (context) => check(context) && (
    async () => {
      //console.log(context);
      updateHistory(context.id, (history) => history.erase());
      try {
        const buttons = [...MORE_LETTER];
        //buttons.splice(2, 0, context.source.bot.isActivated ? COMMAND_BOT_DEACTIVATE : COMMAND_BOT_ACTIVATE);
        context.pushTemplate(COMMAND_SYS_MORELETTER.label, buttons, GENERAL_COMMANDS);
        context.pushText('若上述選單沒有您想要的信件種類\n請依照以下範例輸入\n收件者：\n內容：\n寄件者：', GENERAL_COMMANDS);
        context.pushText('若不滿意生成後的信件內容\n請輸入\n修改內容：「您的需求」', GENERAL_COMMANDS);
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
  