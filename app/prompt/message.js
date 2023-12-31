import { TYPE_SUM, TYPE_ANALYZE, TYPE_TRANSLATE,TYPE_TRANSLATE_DOWN } from '../../constants/command.js';

class Message {
  role;

  content;

  constructor({
    role,
    content,
  }) {
    this.role = role;
    this.content = content;
  }

  get isEnquiring() {
    return this.content === TYPE_SUM
    || this.content === TYPE_ANALYZE
    || this.content === TYPE_TRANSLATE
    || this.content === TYPE_TRANSLATE_DOWN;
  }

  toString() {
    return this.role ? `\n${this.role}: ${this.content}` : this.content;
  }
}

export default Message;
