import { TYPE_TRANSLATE } from '../../constants/command.js';
import { t } from '../../locales/index.js';
import Command from './command.js';

export default new Command({
  type: TYPE_TRANSLATE,
  label: t('__COMMAND_TRANSLATE_TO_GM_LABEL'),
  text: t('__COMMAND_TRANSLATE_TO_GM_TEXT'),
  prompt: t('__COMMAND_TRANSLATE_TO_GM_PROMPT'),
  aliases: [
    '/translate-to-gm',
    'Translate to Germanese',
    'Translate to GM',
  ],
});
