import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StripeModule } from '@golevelup/nestjs-stripe';

@Module({
  imports: [
    StripeModule.forRoot({
      apiKey: 'rk_test_***',
      webhookConfig: {
        stripeSecrets: {
          account: 'whsec_***',
          accountTest: 'whsec_***',
        },
        requestBodyProperty: 'rawBody',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
