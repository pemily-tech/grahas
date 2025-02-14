import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	ImagePlaceholder,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@grahas/ui';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const photos = [
	{ src: '/images/bg.jpeg' },
	{ src: '/images/1.jpeg' },
	{ src: '/images/2.jpeg' },
	{ src: '/images/3.jpeg' },
	{ src: '/images/4.jpeg' },
	{ src: '/images/5.jpeg' },
	{ src: '/images/6.jpeg' },
	{ src: '/images/7.jpeg' },
	{ src: '/images/8.jpeg' },
	{ src: '/images/9.jpeg' },
];

const videos = [
	{ src: '/videos/g3.mp4' },
	{ src: '/videos/g4.mp4' },
	{ src: '/videos/g2.mp4' },
	{ src: '/videos/g1.mp4' },
];

export const Gallery = () => {
	return (
		<div className="container">
			<div className="rounded-12 min-h-[600px] bg-white p-16">
				<h2 className="text-24 mb-4 font-medium">GALLERY</h2>

				<Tabs defaultValue="videos" className="w-full">
					<TabsList>
						<TabsTrigger value="videos">Videos</TabsTrigger>
						<TabsTrigger value="photos">Photos</TabsTrigger>
					</TabsList>

					{/* Videos Tab */}
					<TabsContent value="videos">
						<Carousel className="rounded-12 bg-white">
							<CarouselContent>
								{videos.map((video, i) => (
									<CarouselItem key={i}>
										<AspectRatio ratio={16 / 9}>
											<video
												src={video.src}
												className="size-full object-cover"
												autoPlay
												muted
												loop
												playsInline
												poster="/images/video-placeholder.jpg"
											/>
										</AspectRatio>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="size-[42px] lg:size-[54px]" />
							<CarouselNext className="size-[42px] lg:size-[54px]" />
						</Carousel>
					</TabsContent>

					{/* Photos Tab */}
					<TabsContent value="photos">
						<Carousel className="rounded-12 bg-white">
							<CarouselContent>
								{photos.map((photo, i) => (
									<CarouselItem key={i}>
										<AspectRatio ratio={16 / 9}>
											<ImagePlaceholder
												src={photo.src}
												alt={`Photo ${i + 1}`}
												containerClasses="w-full h-full"
												imageClasses="object-contain"
											/>
										</AspectRatio>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="size-[42px] lg:size-[54px]" />
							<CarouselNext className="size-[42px] lg:size-[54px]" />
						</Carousel>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};
