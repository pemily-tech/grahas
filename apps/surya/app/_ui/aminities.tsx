import React from 'react';
import { ImagePlaceholder } from '@grahas/ui';

export const Aminities = () => {
  return (
    <div className="container">
      <div className="bg-white p-16">
        <h2 className="text-24 font-medium">Aminities</h2>
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/cctv.png"
              containerClasses="w-24 h-24"
            />
            <span>Security System</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/children.png"
              containerClasses="w-24 h-24"
            />
            <span>Kids Play Area</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/gym.png"
              containerClasses="w-24 h-24"
            />
            <span>Gym</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/tennis.png"
              containerClasses="w-24 h-24"
            />
            <span>Table Tennis</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/badminton-court.png"
              containerClasses="w-24 h-24"
            />
            <span>Badminton Court</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/swimming-pool.png"
              containerClasses="w-24 h-24"
            />
            <span>Swimming Pool</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/yoga.png"
              containerClasses="w-24 h-24"
            />
            <span>Yoga</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/basketball-court.png"
              containerClasses="w-24 h-24"
            />
            <span>Basket Ball Court</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center border p-16">
            <ImagePlaceholder
              src="/images/guest-room.png"
              containerClasses="w-24 h-24"
            />
            <span>Multipurpose Halls</span>
          </div>
        </div>
      </div>
    </div>
  );
};
