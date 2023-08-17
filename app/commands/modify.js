import { TYPE_MODIFY } from '../../constants/command.js';
import { t } from '../../locales/index.js';
import Command from './command.js';

export default new Command({
  type: TYPE_MODIFY,
  label: t('__COMMAND_MODIFY_LABEL'),
  text: t('__COMMAND_MODIFY_TEXT'),
  //prompt: t('__COMMAND_ANALYZE_LITERARILY_PROMPT'),
  aliases: [
    '/modify',
    'Modify',
  ],
});
