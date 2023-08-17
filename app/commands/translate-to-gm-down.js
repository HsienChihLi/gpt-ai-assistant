import { TYPE_TRANSLATE_DOWN } from '../../constants/command.js';
import { t } from '../../locales/index.js';
import Command from './command.js';

export default new Command({
  //ype: TYPE_TRANSLATE_DOWN,
  label: t('__COMMAND_TRANSLATE_TO_GM_DOWN_LABEL'),
  text: t('__COMMAND_TRANSLATE_TO_GM_DOWN_TEXT'),
  prompt: t('__COMMAND_TRANSLATE_TO_GM_DOWN_PROMPT'),
  aliases: [
    '/translate-to-gm-down',
    'Translate to Germanese down',
    'Translate to GM down',
  ],
});
