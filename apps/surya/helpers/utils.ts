export const siteConfig = {
  title: 'Bangalore Dream House',
  description: 'Bangalore Dream House',
  keywords: () => ['Bangalaore', 'dream ', 'house'],
  url: () => process.env['APP_URL'] as string,
  // googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
};
