import '../assets/styles/globals.css';

import { type PropsWithChildren } from 'react';
import { Toaster } from '@grahas/ui';
import { cn } from '@grahas/utils';
import { type Metadata } from 'next';
import Script from 'next/script'; // Import Next.js Script component

import { fonts, siteConfig } from '../helpers';

export const generateMetadata = (): Metadata => ({
	metadataBase: new URL(siteConfig.url()),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords(),
	robots: { index: true, follow: true },
	icons: {
		icon: '/favicon/favicon.ico',
		shortcut: '/favicon/favicon-16x16.png',
		apple: '/favicon/apple-touch-icon.png',
	},
	verification: {
		// google: siteConfig.googleSiteVerificationId(),
	},
	openGraph: {
		url: siteConfig.url(),
		title: siteConfig.title,
		description: siteConfig.description,
		siteName: siteConfig.title,
		images: '/favicon/icon-512-maskable.png',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.title,
		description: siteConfig.description,
		images: '/favicon/icon-512-maskable.png',
	},
});

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Google Tag Manager Script */}
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-16876355917"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16876355917');
          `}
				</Script>
			</head>
			<body className={cn('min-h-screen font-sans', fonts)}>
				{children}
				<Toaster closeButton richColors position="bottom-left" />
			</body>
		</html>
	);
};

export default RootLayout;
