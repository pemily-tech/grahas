'use client';

import { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@grahas/ui';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	const [show, setShow] = useState(false);
	const scrollToComponent = (id: string) => {
		setShow(false);
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<header className="shadow-card1 fixed top-0 z-10 h-[72px] w-full bg-white">
			<div className="container flex h-full items-center justify-between">
				<h1 className="text-24 font-medium">
					<Link href="/">Sobha Town Park</Link>
				</h1>
				<div className="hidden lg:block">
					<div className="cursor-pointer" onClick={() => scrollToComponent('overview')}>
						Overview
					</div>
				</div>
				<Dialog open={show} onOpenChange={setShow}>
					<DialogTrigger className="lg:hidden">
						<MenuIcon />
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle></DialogTitle>
							<DialogDescription></DialogDescription>
						</DialogHeader>
						<div className="flex items-center justify-center">
							<div
								className="text-32 cursor-pointer"
								onClick={() => scrollToComponent('overview')}
							>
								Overview
							</div>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</header>
	);
}
