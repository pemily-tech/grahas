import React from 'react';
import { Button } from '@grahas/ui';

export const Pricing = () => {
	const pricingDetails = [
		// { type: '1 BHK', sqft: '753 SQFT', price: '₹90 L' },
		// { type: '2 BHK Medium', sqft: '1240 SQFT', price: '₹1.60 Cr' },
		// { type: '2 BHK Large', sqft: '1339 SQFT', price: '₹1.75 Cr' },
		// { type: '3 BHK Medium', sqft: '1514 SQFT', price: '₹2.10 Cr' },
		// { type: '3 BHK Large', sqft: '1842 SQFT', price: '₹2.50 Cr' },
		// { type: '4 BHK Medium', sqft: '2203 SQFT', price: '₹3.20 Cr' },
		// { type: '4 BHK Large', sqft: '2800 SQFT', price: '₹4.10 Cr' },
		{ type: '3 BHK', sqft: '1750 - 1950 SQFT', price: '₹ On Request - ' },
		{ type: '4 BHK', sqft: '2200 - 2800 SQFT', price: '₹ On Request - ' },
	];

	return (
		<div className="container">
			<div className="rounded-12 my-8 bg-white p-16">
				<h2 className="text-24 font-medium">PRICING</h2>
				<p className="text-14 mt-8">
					Positioned in the heart of South Bangalore's thriving luxury real estate market,{' '}
					<strong>Sobha Magnum</strong> is a meticulously planned 4-acre residential
					enclave that combines architectural excellence with the urban charm. Located
					along the prime stretch of Bannerghatta Road, this upscale development features
					four elegantly designed towers rising up to 18 floors and offering a total of
					294 thoughtfully crafted homes.
				</p>
				<p className="text-14 mt-4">
					With pricing estimated at ₹18,000 per sq. ft., <strong>Sobha Magnum</strong>{' '}
					reflects exceptional build quality and a strategic location amidst a steadily
					appreciating property landscape. It offers a refined selection of spacious 3 BHK
					and 4 BHK apartments—ranging from 1750 to 1950 sq. ft. for 3 BHKs (approximately
					₹3.15 to ₹3.51 crore) and 2200 to 2800 sq. ft. for 4 BHKs (₹3.96 to ₹5.04
					crore). These residences are designed with premium specifications, intelligent
					layouts, and access to world-class amenities—creating a lifestyle where
					elegance, comfort, and cosmopolitan living come together in perfect harmony.
				</p>

				<div className="mt-16">
					<h3 className="text-20 font-medium">Project Offering</h3>
					<div className="mt-12 overflow-x-auto">
						<table className="w-full border-collapse">
							<thead>
								<tr className="bg-gray-100">
									<th className="border p-4 text-left">Type</th>
									<th className="border p-4 text-left">Area (SQFT)</th>
									<th className="border p-4 text-left">Price</th>
								</tr>
							</thead>
							<tbody>
								{pricingDetails.map((item, index) => (
									<tr key={index} className="transition-colors hover:bg-gray-50">
										<td className="border p-4">{item.type}</td>
										<td className="border p-4">{item.sqft}</td>
										<td className="border p-4">
											<div className="flex flex-col gap-2">
												<span className="font-semibold">{item.price}</span>
												<Button className="bg-primary hover:bg-primary max-w-[160px] text-white">
													Get Pricing
												</Button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="mt-16">
					<p className="text-14">
						{/* First Phase of Allotments for Pre-Launch Offers! Submit your Expression of
						Interest (EOI) with payment by February 10, 2025, to secure your exclusive
						opportunity. */}
					</p>
					<p className="text-14 mt-4 font-semibold">Hurry! Limited Offers!</p>
				</div>
			</div>
		</div>
	);
};
