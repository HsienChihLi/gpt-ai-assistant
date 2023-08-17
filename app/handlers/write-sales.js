import config from '../../config/index.js';
import { t } from '../../locales/index.js';
import { ROLE_AI, ROLE_HUMAN } from '../../services/openai.js';
import { generateCompletion } from '../../utils/index.js';
import { getPrompt, setPrompt } from '../prompt/index.js';
import { COMMAND_SYS_WRITE_SALES, GENERAL_COMMANDS } from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const check = (context) => context.hasCommand(COMMAND_SYS_WRITE_SALES);

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const exec = (context) => check(context) && (
  async () => {
    const prompt = getPrompt(context.userId);
    prompt.write(ROLE_HUMAN, `${t('__COMPLETION_DEFAULT_AI_TONE')(config.BOT_TONE)}${context.trimmedText}`).write(ROLE_AI);
    try {
      
      const { text, isFinishReasonStop } = await generateCompletion({ prompt });
      prompt.patch(text);
      setPrompt(context.userId, prompt);
      updateHistory(context.id, (history) => history.write(config.BOT_NAME, text));
      const actions = isFinishReasonStop ? [] : [COMMAND_BOT_CONTINUE];
      context.pushText(text, actions);
      context.pushText('請依照以下範例輸入\n收件者：\n內容：\n寄件者：', GENERAL_COMMANDS);
      context.pushText('若不滿意生成後的信件內容\n請輸入\n修改內容：「您的需求」', GENERAL_COMMANDS);

    } catch (err) {
      context.pushError(err);
    }
    return context;
  }
)();

export default exec;
