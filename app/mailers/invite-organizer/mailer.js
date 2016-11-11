import { Mailer } from 'denali-mailer';

export default class InviteOrganizerMailer extends Mailer {
  from = 'from@email.com';
  subject = 'Organizer Invite - Community Groups';

  to(data) {
    return data.email;
  }
}
