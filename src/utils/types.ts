export interface Subscription {
  id: string;
  service: string;
  amount: number;
  frequency: 'monthly' | 'yearly'
  category: string;
  lastRenewalDate: Date;
  isNotification: boolean;
}