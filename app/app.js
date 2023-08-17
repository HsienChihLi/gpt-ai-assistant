import { replyMessage } from '../utils/index.js';
import {
  activateHandler,
  commandHandler,
  continueHandler,
  deactivateHandler,
  deployHandler,
  docHandler,
  drawHandler,
  forgetHandler,
  enquireHandler,
  reportHandler,
  retryHandler,
  searchHandler,
  talkHandler,
  versionHandler,
  writeHandler,
  moreletterHandler,
  writeinquiryHandler,
  writeadvertiseHandler,
  writeadviceHandler,
  writecontractHandler,
  writethankHandler,
  writeoverdueHandler,
  writesalesHandler,
  translateHandler,
  upHandler,
  downHandler,
  englishHandler,
  jaHandler,
  gmHandler,
  cnHandler,
  replyHandler,
  replyupHandler,
  replydownHandler,
  emailHandler
} from './handlers/index.js';
import Context from './context.js';
import Event from './models/event.js';

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const handleContext = async (context) => (
  activateHandler(context)
  || writeHandler(context)
  || replyHandler(context)
  || emailHandler(context)
  || replyupHandler(context)
  || replydownHandler(context)
  || moreletterHandler(context)
  || writeinquiryHandler(context)
  || writeadvertiseHandler(context)
  || writeadviceHandler(context)
  || writecontractHandler(context)
  || writethankHandler(context)
  || writeoverdueHandler(context)
  || writesalesHandler(context)
  || translateHandler(context)
  || upHandler(context)
  || downHandler(context)
  || englishHandler(context)
  || jaHandler(context)
  || gmHandler(context)
  || cnHandler(context)
  || commandHandler(context)
  || continueHandler(context)
  || deactivateHandler(context)
  || deployHandler(context)
  || docHandler(context)
  || drawHandler(context)
  || forgetHandler(context)
  || enquireHandler(context)
  || reportHandler(context)
  || retryHandler(context)
  || searchHandler(context)
  || versionHandler(context)
  || talkHandler(context)
  || context
);


const handleEvents = async (events = []) => (
  (Promise.all(
    (await Promise.all(
      (await Promise.all(
        events
          .map((event) => new Event(event))
          .filter((event) => event.isMessage)
          .filter((event) => event.isText || event.isAudio)
          .map((event) => new Context(event))
          .map((context) => context.initialize()),
      ))
        .map((context) => (context.error ? context : handleContext(context))),
    ))
      .filter((context) => context.messages.length > 0)
      .map((context) => replyMessage(context)),
  ))
);
//console.log(Object.entries(handleEvents));
export default handleEvents;
