import { TYPE_TRANSLATE_DOWN } from '../../constants/command.js';
import { t } from '../../locales/index.js';
import Command from './command.js';

export default new Command({
  //type: TYPE_TRANSLATE_DOWN,
  label: t('__COMMAND_DOWN_LABEL'),
  text: t('__COMMAND_DOWN_TEXT'),
  aliases: [
    '/down',
    'Down',
  ],
});