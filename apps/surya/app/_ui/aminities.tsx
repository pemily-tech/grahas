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
              src="/images/swimming-pool.png"
              containerClasses="w-24 h-24"
            />
            <span>Swimming Pool</span>
          </div>
        </div>
      </div>
    </div>
  );
};
