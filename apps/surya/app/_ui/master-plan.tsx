import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ImagePlaceholder,
} from '@grahas/ui';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const data = [
  { src: '/images/1.jpeg' },
  { src: '/images/2.jpeg' },
  { src: '/images/3.jpeg' },
  { src: '/images/4.jpeg' },
  { src: '/images/5.jpeg' },
  { src: '/images/6.jpeg' },
  { src: '/images/7.jpeg' },
  { src: '/images/8.jpeg' },
];

export const MasterPlan = () => {
  return (
    <div className="container">
      <div className=" rounded-12 my-8 bg-white p-16">
        <h2 className="text-24 font-medium">Site & Floor Plan</h2>
        <ImagePlaceholder
          src="/images/master-plan.jpeg"
          containerClasses="w-full h-[600px]"
          imageClasses="object-contain"
        />
      </div>
      <Carousel className="rounded-12 my-8 bg-white p-16">
        <h2 className="text-24 font-medium">Gallery</h2>
        <CarouselContent>
          {data?.map((d, i) => {
            return (
              <CarouselItem key={i}>
                <AspectRatio ratio={16 / 9}>
                  <ImagePlaceholder
                    src={d.src}
                    containerClasses="w-full h-full"
                    imageClasses="object-contain"
                  />
                </AspectRatio>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="size-[42px] lg:size-[54px]" />
        <CarouselNext className="size-[42px] lg:size-[54px]" />
      </Carousel>
    </div>
  );
};
