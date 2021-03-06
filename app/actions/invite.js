import ApplicationAction from './application';

export default class InviteAction extends ApplicationAction {
  respond(params) {
    let email = params.data.attributes.email;
    let mailer = this.service('mailer');
    mailer.send('invite-organizer', { email });
  }
}
