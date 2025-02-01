import { env } from '../env.mjs';

export const siteConfig = {
  title: 'Bangalore Dream House',
  description: 'Bangalore Dream House',
  keywords: () => ['Bangalaore', 'dream ', 'house'],
  url: () => env.APP_URL,
  // googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
};
