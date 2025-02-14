import { ImagePlaceholder } from '@grahas/ui';

import { Aminities } from './_ui/aminities';
import Registration from './_ui/form';
import Header from './_ui/header';
import { MasterPlan } from './_ui/master-plan';
import RegistrationModal from './_ui/registration-modal';

export default function Index() {
  return (
    <div className="relative">
      <Header />
      <RegistrationModal />
      <ImagePlaceholder
        src="/images/bg.jpeg"
        containerClasses="h-screen w-full mt-[72px]"
        imageClasses="object-cover"
      />
      <div className="container py-8">
        <div className="rounded-12 bg-white p-16">
          <h3 className="text-32 font-medium">Register your Interest</h3>
          <Registration />
        </div>
      </div>
      <div id="overview" className="container py-8">
        <div className="rounded-12 bg-white p-16 ">
          <h2 className="text-32 font-medium">Project Detail</h2>
          <p className="my-12">
            Bringing the energy and sophistication of New York City to the
            vibrant heart of Bengaluru,
            <span className="font-medium">SOBHA TOWNPARK</span> redefines urban
            living. Strategically located on Hosur Road near Electronic City,
            this NYC-themed township blends contemporary architecture with
            world-class amenities, offering a lifestyle as dynamic as the city
            it’s inspired by. Designed for families, professionals, and
            investors alike, <span className="font-medium">SOBHA TOWNPARK</span>{' '}
            is more than just a residence—it’s a statement of modern luxury and
            convenience, setting a new benchmark for upscale living in
            Bengaluru.
          </p>
        </div>
      </div>
      <Aminities />
      <MasterPlan />
      <div className="container">
        <div className="rounded-12 my-8 bg-white p-16">
          <h2 className="text-24 font-medium">About The Developer</h2>
          <p className="py-16">
            Sobha Realty is an international luxury developer committed to
            redefining the art of living through sustainable communities.
            Established in 1976 as an interior decoration firm in Oman by PNC
            Menon – a visionary entrepreneur, the company has grown its presence
            with developments and investments in the UAE, Oman, Bahrain, Brunei
            and India. Over the last four decades, Sobha Realty has also
            redefined the real estate value chain by leveraging its inherent
            in-house capabilities of conceptualisation, design and development.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 p-8 text-white">
        <div className=" rounded-lg p-6 shadow-md">
          <p className="text-sm">
            Disclaimer: The content is for information purposes only and does
            not constitute an offer to avail of any service. Prices mentioned
            are subject to change without notice and properties mentioned are
            subject to availability. Images for representation purposes only.
            This is the official website of an authorized marketing partner. We
            may share data with RERA registered brokers/companies for further
            processing. We may also send updates to the mobile number/email ID
            registered with us. All Rights Reserved.
          </p>
          <p className="mt-4 font-semibold">
            Pentagon Real Estate : RERA NO : A09600029014
          </p>
        </div>
      </div>
    </div>
  );
}
