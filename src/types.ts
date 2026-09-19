export type CategoryType = 'all' | 'integrated' | 'vip' | 'data' | 'enterprise' | 'iot';

export interface TelecomPackage {
  id: string;
  name: string;
  category: 'integrated' | 'vip' | 'data' | 'enterprise';
  price: number;
  periodText: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'orange' | 'vip' | 'neutral';
  dailyDataText: string;
  totalDataText: string;
  dataCategory: '1gb' | '2gb' | '3gb' | '6gb_plus' | 'monthly';
  dataIcon: string;
  voiceInternal: string;
  voiceExternal: string;
  voiceType: 'none' | 'internal' | 'external' | 'both';
  sms?: string;
  apps: Array<'mytv' | 'tiktok_yt' | 'gaming' | 'genai' | 'none'>;
  subscriberType: Array<'prepaid' | 'postpaid' | 'enterprise'>;
  smsSyntax: string;
  benefits: string[];
  terms: string;
  isBestSeller?: boolean;
}

export interface QuizState {
  step: number;
  dataNeed?: 'low' | 'medium' | 'heavy';
  voiceNeed?: 'low' | 'internal' | 'both';
  appNeed?: 'social' | 'tv' | 'ai_game';
  budget?: 'budget_low' | 'budget_med' | 'budget_high';
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  packageId: string;
  simType: 'prepaid' | 'postpaid' | 'mnp' | 'new_esim';
  note: string;
}
