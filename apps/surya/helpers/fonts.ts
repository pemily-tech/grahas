import localFont from 'next/font/local';

const sans = localFont({
  src: [
    {
      path: '../assets/fonts/GeneralSans-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const fonts = [sans.variable];
