import { TYPE_TRANSLATE } from '../../constants/command.js';
import { t } from '../../locales/index.js';
import Command from './command.js';

export default new Command({
  //type: TYPE_TRANSLATE,
  label: t('__COMMAND_UP_LABEL'),
  text: t('__COMMAND_UP_TEXT'),
  aliases: [
    '/up',
    'Up',
  ],
});