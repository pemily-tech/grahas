'use client';

import { MouseEvent, useState } from 'react';
import { ImagePlaceholder } from '@grahas/ui';

import { About } from './_ui/about';
import { Amenities } from './_ui/amenities';
import Registration from './_ui/form';
import { Gallery } from './_ui/gallery';
import Header from './_ui/header';
import { Location } from './_ui/location';
import { Plan } from './_ui/plan';
import { Pricing } from './_ui/pricing';
import { ProjectDetail } from './_ui/project-detail';
import RegistrationModal from './_ui/registration-modal';

export default function Index() {
	const [show, setShow] = useState(true);

	const handleModalOpen = () => setShow(true);

	return (
		<div className="relative">
			<Header />
			<RegistrationModal setShow={setShow} show={show} />
			<div className="bg-primary fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4 rounded-l-lg p-4 shadow-lg">
				{/* Call Button */}
				{/* <a
					href="tel:+917411109377" // Replace with your phone number
					className="rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110"
					aria-label="Call Us"
				>
					<ImagePlaceholder
						src="/images/telephone.png"
						containerClasses="w-40 h-40" // Adjusted size for better proportions
						alt="Call Icon"
					/>
				</a> */}

				{/* WhatsApp Button */}
				{/* <a
					href="https://wa.me/7411109377" // Replace with your WhatsApp link
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110"
					aria-label="Chat on WhatsApp"
				>
					<ImagePlaceholder
						src="/images/whatsApp.png"
						containerClasses="w-40 h-40" // Adjusted size for better proportions
						alt="WhatsApp Icon"
					/>
				</a> */}
			</div>
			{/* <video
				onClick={handleModalOpen}
				src="/videos/bg2.mp4"
				className="h-screen w-full object-cover"
				autoPlay
				muted
				loop
				playsInline
			></video> */}

			<img
				onClick={handleModalOpen}
				src="/images/sobhamagnum.webp" // or your image path
				className="h-screen w-full cursor-pointer object-cover"
				alt="Background"
			/>

			<div className="container mt-8">
				<div className="rounded-12 bg-white p-16">
					<h3 className="text-24 font-medium">ENQUIRE / BOOK A TRIP(FREE CAB) NOW</h3>
					<Registration />
				</div>
			</div>
			<div onClick={handleModalOpen}>
				<ProjectDetail />
			</div>
			{/* <Gallery /> */}
			<div onClick={handleModalOpen}>
				<Amenities />
				<Pricing />
				<Plan />
				<About />
				<Location />
			</div>
			<div onClick={handleModalOpen} className="bg-gray-900 p-8 text-white">
				<div className=" rounded-lg p-6 shadow-md">
					<p className="text-sm">
						Disclaimer: This website is an independent informational platform operated
						by a RERA-authorized real estate consultancy and is not affiliated with any
						developer. The information provided is for general reference only and does
						not constitute an offer, commitment, or guarantee of services. Property
						prices, availability, and other details are subject to change without prior
						notice. Images shown are for illustrative purposes only and may not
						accurately represent actual properties. By using this website, you
						acknowledge that we may share your details with RERA-registered developers
						for further assistance and may send relevant updates to your registered
						contact information.
					</p>
					<p className="mt-4 font-semibold">
						Privacy Policy: All content, design, and information on this website are
						protected by copyright and intellectual property laws. Any unauthorized use,
						reproduction, or distribution of materials may lead to legal consequences.
						For the most accurate, up-to-date details on services, pricing, and property
						availability, please contact us directly using the information provided on
						this website.
					</p>
				</div>
			</div>
		</div>
	);
}
