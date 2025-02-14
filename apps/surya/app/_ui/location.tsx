import React from 'react';

export const Location = () => {
	return (
		<div className="container">
			<div className="rounded-12 my-8 bg-white p-16">
				<h2 className="text-24 mb-4 font-medium">LOCATION</h2>

				{/* Wrapper for responsiveness */}
				<div className="relative w-full" style={{ height: '500px' }}>
					<iframe
						title="Sobha Townpark Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.155692492832!2d77.67957967441876!3d12.839377317949235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6cd3e89f4313%3A0xd2168ebc77aaed4d!2sSobha%20Townpark!5e0!3m2!1sen!2sin!4v1700000000000"
						className="absolute left-0 top-0 size-full rounded-lg"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
};
