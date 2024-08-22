import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import Stripe from 'stripe';
import { UserApiLimit } from './stipe.entity';
import { Repository } from 'typeorm';
@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  private readonly logger = new Logger(StripeService.name);
  constructor(
    @InjectRepository(UserApiLimit)
    private userApiLimitRepository: Repository<UserApiLimit>,
    @Inject('STRIPE_API_KEY') private readonly apiKey: string) {
    this.stripe = new Stripe(this.apiKey, {
      apiVersion: '2024-06-20', // Use whatever API latest version
    });
  }
  async getProducts(): Promise<Stripe.Product[]> {
    const products = await this.stripe.products.list();
    return products.data;
  }

  async getCustomers() {
    const customers = await this.stripe.customers.list({});
    return customers.data;
  }

  async increaseApiLimit(userId: string): Promise<void> {
    // const userId = await this.authService.getCurrentUserId();
    if (!userId) return;

    const userApiLimit = await this.userApiLimitRepository.findOne({ where: { userId } });

    if (userApiLimit) {
      await this.userApiLimitRepository.update(
        { userId },
        { count: userApiLimit.count + 1 }
      );
    } else {
      await this.userApiLimitRepository.save({
        userId,
        count: 1,
      });
    }
  }

  async checkApiLimit(userId: string): Promise<boolean> {
    // const userId = await this.authService.getCurrentUserId();
    if (!userId) return false;

    const userApiLimit = await this.userApiLimitRepository.findOne({ where: { userId } });

    if (!userApiLimit || userApiLimit.count < 5) {
      return true;
    } else {
      return false;
    }
  }

  async getApiLimitCount(userId: string): Promise<number> {
    // const userId = await this.authService.getCurrentUserId();
    if (!userId) return 0;

    const userApiLimit = await this.userApiLimitRepository.findOne({ where: { userId } });

    if (!userApiLimit) return 0;
    return userApiLimit.count;
  }
}
