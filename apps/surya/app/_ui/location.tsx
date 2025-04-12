import React from 'react';

export const Location = () => {
	return (
		<div className="container">
			<div className="rounded-12 my-8 bg-white p-16">
				<h2 className="text-24 mb-4 font-medium">LOCATION</h2>

				{/* Wrapper for responsiveness */}
				<div className="relative w-full" style={{ height: '500px' }}>
					<iframe
						title="Sobha Scarlet & Magnum Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8736211834075!2d77.73932019678954!3d12.786714299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6e03e51367c7%3A0x65e34df5be85c70d!2sSOBHA%20Manhattan%20Towers%20-%20Scarlet & Magnum!5e0!3m2!1sen!2sin!4v1739554480451!5m2!1sen!2sin"
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
