import { TYPE_SYSTEM } from '../../constants/command.js';
import { t } from '../../locales/index.js';
import Command from './command.js';

export default new Command({
  type: TYPE_SYSTEM,
  label: t('__COMMAND_SYS_WRITE_THANK_LABEL'),
  text: t('__COMMAND_SYS_WRITE_THANK_TEXT'),
  aliases: [
    '/thank',
    'Thank',
  ],
});
