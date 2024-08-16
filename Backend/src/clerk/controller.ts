import { Controller, Post, Req, Res, HttpStatus, RawBodyRequest } from '@nestjs/common';
import { Request, Response } from 'express';
import { Webhook } from 'svix';

@Controller('/api/webhook')
export class ClerkController {
  @Post()
  async handleWebhook(@Req() req: RawBodyRequest<Request>, @Res() res: Response) {

    try {
      const payloadString = (req.body || '').toString();
      // const svixHeaders = req.headers;
      const svixHeaders = {
        'svix-id': req.headers['svix-id'] as string,
        'svix-timestamp': req.headers['svix-timestamp'] as string,
        'svix-signature': req.headers['svix-signature'] as string,
      };
      const wh = new Webhook("https://b2e9-171-252-153-206.ngrok-free.app/api/webhook");
      try {
        const evt: any = wh.verify(payloadString, svixHeaders as Record<string, string>);
        const { id, ...attributes } = evt.data;
        console.log('evtgg', evt);
        // Handle the webhooks
        const eventType = evt.type;
        if (eventType === 'user.created') {
          console.log(`User ${id} was ${eventType}`);
          console.log(attributes);
        }

      } catch (err) {
        console.log('err', err);
      }


      res.status(HttpStatus.OK).json({
        success: true,
        message: 'Webhook received',
      });
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: err.message,
      });
    }
  }
}