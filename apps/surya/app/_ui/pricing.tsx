import React from 'react';

export const Pricing = () => {
	const pricingDetails = [
		{ type: '1 BHK', sqft: '753 SQFT', price: '₹90 L' },
		{ type: '2 BHK Medium', sqft: '1240 SQFT', price: '₹1.60 Cr' },
		{ type: '2 BHK Large', sqft: '1339 SQFT', price: '₹1.75 Cr' },
		{ type: '3 BHK Medium', sqft: '1514 SQFT', price: '₹2.10 Cr' },
		{ type: '3 BHK Large', sqft: '1842 SQFT', price: '₹2.50 Cr' },
		{ type: '4 BHK Medium', sqft: '2203 SQFT', price: '₹3.20 Cr' },
		{ type: '4 BHK Large', sqft: '2800 SQFT', price: '₹4.10 Cr' },
	];

	return (
		<div className="container">
			<div className="rounded-12 my-8 bg-white p-16">
				<h2 className="text-24 font-medium">PRICING</h2>
				<p className="text-14 mt-8">
					Discover Sobha Townpark, a sprawling 36-acre masterpiece inspired by the charm
					and energy of New York City. Strategically located on Hosur Main Road, just
					before Attibele Toll, this premium residential enclave redefines luxury living.
					With an intelligently designed layout and world-class amenities, Sobha Townpark
					offers an unparalleled lifestyle, where elegance meets urban sophistication.{' '}
				</p>
				<div className="mt-16">
					<h3 className="text-20 font-medium">
						Project Offering of Madison Heights & Hamptons
					</h3>
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
										<td className="border p-4 font-semibold">{item.price}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="mt-16">
					<p className="text-14">
						First Phase of Allotments for Pre-Launch Offers! Submit your Expression of
						Interest (EOI) with payment by February 10, 2025, to secure your exclusive
						opportunity.
					</p>
					<p className="text-14 mt-4 font-semibold">Hurry! Limited Offers!</p>
				</div>
			</div>
		</div>
	);
};
