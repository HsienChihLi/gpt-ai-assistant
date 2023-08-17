import { TYPE_TRANSLATE_DOWN } from '../../constants/command.js';
import { t } from '../../locales/index.js';
import Command from './command.js';

export default new Command({
  //type: TYPE_TRANSLATE_DOWN,
  label: t('__COMMAND_TRANSLATE_TO_JA_DOWN_LABEL'),
  text: t('__COMMAND_TRANSLATE_TO_JA_DOWN_TEXT'),
  prompt: t('__COMMAND_TRANSLATE_TO_JA_DOWN_PROMPT'),
  aliases: [
    '/translate-to-ja-down',
    'Translate to Japanese down',
    'Translate to JA down',
  ],
});
