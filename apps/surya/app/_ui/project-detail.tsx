import React from 'react';

const Intro = () => (
	<>
		<h2 className="text-24 font-medium">
			PROJECT DETAIL - <strong>Sobha Magnum</strong> (Bannerghatta Road, Bangalore)
		</h2>
		<p className="my-12">
			Discover elevated living at <strong>Sobha Magnum</strong>, an upscale residential
			project set in South Bangalore. This meticulously crafted community spans 4 acres and
			comprises four residential towers, each soaring up to 18 stories and collectively
			offering 294 premium apartments.
		</p>
		<p className="my-12">
			Choose from elegantly designed 3 BHK and 4 BHK units tailored for contemporary living.
			The 3 BHK homes are available in two configurations—1750 sq. ft. and 1950 sq. ft.—while
			the larger 4 BHK residences range from 2200 sq. ft. to 2800 sq. ft.
		</p>
	</>
);

const ProjectHighlights = () => (
	<>
		<h2 className="text-20 font-medium">
			<strong>Sobha Magnum</strong> Highlights
		</h2>
		<p>
			<strong>Sobha Magnum</strong> is a prestigious project developed by Sobha Limited, known
			for exceptional standards in construction and service.
		</p>
		<p>
			<strong>Sobha Magnum</strong> offers spacious rooms with large windows, balconies, and
			natural light for a stylish and comfortable lifestyle.
		</p>
		<p>
			Facilities include a swimming pool, gym, tennis/basketball courts, game zones, and
			landscaped play areas—all at <strong>Sobha Magnum</strong>.
		</p>
		<p>
			<strong>Sobha Magnum</strong> implements sustainable water management using local wells,
			rainwater harvesting, and treatment plants.
		</p>
		<p>
			Security includes 24/7 guards, CCTV, and fire/earthquake compliant structures at{' '}
			<strong>Sobha Magnum</strong>.
		</p>
		<p>
			<strong>Sobha Magnum</strong> integrates green initiatives like LED lighting,
			water-saving fixtures, and lush gardens to lower bills.
		</p>
		<p>
			Modern kitchens, premium flooring, designer bathrooms—<strong>Sobha Magnum</strong>{' '}
			interiors blend elegance and utility.
		</p>
		<p>
			<strong>Sobha Magnum</strong> supports EVs with basement parking and charging stations.
		</p>
		<p>
			Accessibility via elevators and ramps ensures <strong>Sobha Magnum</strong> is inclusive
			for all.
		</p>
		<p>
			Children thrive at <strong>Sobha Magnum</strong> with creative zones and play areas.
		</p>
		<p>
			Community life at <strong>Sobha Magnum</strong> features clubhouses and halls for social
			events.
		</p>
		<p>
			On-site staff at <strong>Sobha Magnum</strong> ensure worry-free maintenance.
		</p>
		<p>
			Located in South Bangalore’s growth zone, <strong>Sobha Magnum</strong> promises timely
			delivery. Contact sales for updates.
		</p>
	</>
);

const LocationAdvantages = () => (
	<>
		<h2 className="text-20 font-medium">
			<strong>Sobha Magnum</strong> Location Advantages
		</h2>
		<p>
			<strong>Sobha Magnum</strong> is 650m from Royal Meenakshi Mall and 600m from Meenakshi
			Temple—walk to shopping and culture.
		</p>
		<p>
			Nearby hospitals include Sree Narayana, Fortis, Apollo, Vasan Eye, Rainbow Children’s,
			and Jayadeva—all close to <strong>Sobha Magnum</strong>.
		</p>
		<p>
			<strong>Sobha Magnum</strong> connects via NICE Road, ORR, and NH-48. Reach Electronic
			City, JP Nagar, and Koramangala easily.
		</p>
		<p>
			Metro access improves routes to Kempegowda Intl. Airport. <strong>Sobha Magnum</strong>{' '}
			is 15 km from Bannerghatta National Park.
		</p>
		<p>
			Top schools near <strong>Sobha Magnum</strong>: Ryan Intl (2.5 km), NPS (3 km), Sherwood
			High (3.5 km), Christ (5 km), IIM-B (4 km).
		</p>
		<p>
			Workplaces near <strong>Sobha Magnum</strong> include IBM, Oracle, Honeywell, Infosys,
			and Wipro—ideal for tech professionals.
		</p>
	</>
);

export const ProjectDetail = () => {
	return (
		<div className="container">
			<div className="rounded-12 my-8 bg-white p-16">
				<Intro />
				<ProjectHighlights />
				<LocationAdvantages />
			</div>
		</div>
	);
};
