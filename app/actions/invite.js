import ApplicationAction from './application';

export default class InviteAction extends ApplicationAction {
  async respond(params) {
    let email = params.data.attributes.email;
    let mailer = this.service('mailer');
    debugger;
    await mailer.send('invite-organizer', { email });
    debugger;
  }
}
