import {Injectable} from '@angular/core';
import emailJs, {EmailJSResponseStatus} from '@emailjs/browser';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class EmailService {

  protected readonly SERVICE_ID = environment.emailJsServiceId;
  protected readonly TEMPLATE_ID = environment.emailJsTemplateId;
  protected readonly PUBLIC_KEY = environment.emailJsPublicKey;

  public sendEmail(params: any): Promise<EmailJSResponseStatus> {
    return emailJs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        company: params.company,
        agent: params.agent,
        instagram: params.instagram,
        whatsapp: params.whatsapp,
        email: params.email,
        message: params.message,
      },
      this.PUBLIC_KEY
    );
  }
}
