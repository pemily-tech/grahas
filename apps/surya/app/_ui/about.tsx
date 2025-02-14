import React from 'react';

export const About = () => {
	return (
		<div className="container">
			<div className="rounded-12 my-8 bg-white p-16">
				<h2 className="text-24 font-medium">ABOUT SOBHA</h2>
				<p className="py-16">
					Sobha Realty is an international luxury developer committed to redefining the
					art of living through sustainable communities. Established in 1976 as an
					interior decoration firm in Oman by PNC Menon – a visionary entrepreneur, the
					company has grown its presence with developments and investments in the UAE,
					Oman, Bahrain, Brunei and India. Over the last four decades, Sobha Realty has
					also redefined the real estate value chain by leveraging its inherent in-house
					capabilities of conceptualisation, design and development.
				</p>
				<div className="bg-gray-100 px-6 py-12 text-center md:px-12 lg:px-24">
					<h2 className="mb-6 text-3xl font-medium text-gray-800">
						SOBHA’s Legacy of Excellence
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<h3 className="text-2xl font-semibold text-gray-700">548+</h3>
							<p className="text-gray-600">
								Iconic projects across residential, commercial, and contractual
								spaces covering 136.68 million sq. ft.
							</p>
						</div>
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<h3 className="text-2xl font-semibold text-gray-700">14,000+</h3>
							<p className="text-gray-600">
								Dedicated employees forming a strong workforce.
							</p>
						</div>
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<h3 className="text-2xl font-semibold text-gray-700">30 Years</h3>
							<p className="text-gray-600">Of passion and commitment at work.</p>
						</div>
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<h3 className="text-2xl font-semibold text-gray-700">27 Cities</h3>
							<p className="text-gray-600">
								Expanding across 14 states, establishing a strong national
								footprint.
							</p>
						</div>
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<h3 className="text-2xl font-semibold text-gray-700">230+</h3>
							<p className="text-gray-600">
								Prestigious awards recognizing excellence and innovation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
