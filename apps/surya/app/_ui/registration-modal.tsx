'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@grahas/ui';

import Registration from './form';

export default function RegistrationModal({
	show,
	setShow,
}: {
	show: boolean;
	setShow: (show: boolean) => void;
}) {
	return (
		<Dialog open={show} onOpenChange={setShow}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>ENQUIRE / BOOK A TRIP(FREE CAB) NOW</DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
				<Registration />
			</DialogContent>
		</Dialog>
	);
}
