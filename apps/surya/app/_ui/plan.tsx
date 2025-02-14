import React from 'react';
import { ImagePlaceholder } from '@grahas/ui';

export const Plan = () => {
	return (
		<div className="container">
			<div className=" rounded-12 my-8 bg-white p-16">
				<h2 className="text-24 font-medium">STTE & FLOOR PLAN</h2>
				<ImagePlaceholder
					src="/images/master-plan.jpeg"
					containerClasses="w-full h-[600px]"
					imageClasses="object-contain"
				/>
			</div>
		</div>
	);
};
