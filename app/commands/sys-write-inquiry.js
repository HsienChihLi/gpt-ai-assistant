import { TYPE_SYSTEM } from '../../constants/command.js';
import { t } from '../../locales/index.js';
import Command from './command.js';

export default new Command({
  type: TYPE_SYSTEM,
  label: t('__COMMAND_SYS_WRITE_INQUIRY_LABEL'),
  text: t('__COMMAND_SYS_WRITE_INQUIRY_TEXT'),
  prompt: t('__COMMAND_SYS_WRITE_INQUIRY_PROMPT'),
  //reply: t('__COMMAND_SYS_INQUIRY_REPLY'),
  aliases: [
    '/inquiry',
    'Inquiry',
  ],
});
