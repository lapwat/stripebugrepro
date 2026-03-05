import { Injectable } from '@nestjs/common';

import {
  InjectStripeClient,
  StripeWebhookHandler,
} from '@golevelup/nestjs-stripe';
import { Stripe } from 'stripe';

@Injectable()
export class StripeService {
  constructor(@InjectStripeClient() private readonly stripeClient: Stripe) {}

  @StripeWebhookHandler('customer.subscription.created')
  async handleSubscriptionScheduleCreated(
    event: Stripe.CustomerSubscriptionCreatedEvent,
  ) {
    const subscription = event.data.object;
    const customerId = subscription.customer as string;

    console.log('subscription updated with status', subscription.status);
  }
}
