import React, { useState } from 'react';
import { Button, ImagePlaceholder } from '@grahas/ui';

export const Plan = () => {
	return (
		<div className="container">
			<div className="rounded-12 my-8 bg-white p-16">
				<h2 className="text-24 font-medium">STTE & FLOOR PLAN</h2>
				<div className="relative flex items-center justify-center">
					<ImagePlaceholder
						src="/images/master-plan.jpeg"
						containerClasses={`w-full h-[600px] blur-sm`}
						imageClasses="object-contain"
					/>
					<Button className="bg-primary hover:bg-primary absolute max-w-[240px] text-white">
						Get Floor Plan
					</Button>
				</div>
			</div>
		</div>
	);
};
