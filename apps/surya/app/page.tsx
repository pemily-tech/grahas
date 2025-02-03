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
          <h2 className="text-32 font-medium">
            Sobha Manhattan Towers - Townpark
          </h2>
          <span className="leading-16 font-medium">
            at Near Electronic City,
          </span>
          <p className="my-12">
            Bangalore SOBHA epitomizes “passion at work” in totality. For us it
            is not only a catch phrase which sounds just right, rather we all
            strive to live it daily. It serves as our compass which guides us
            towards creating world class quality products and workmanship. It
            guides us to be transparent in all our dealings and adhere to
            delivery on time, each time.
          </p>
          <p>
            Our track record of being the most reliable and trustworthy builder
            with a repertoire of award winning properties across India speaks
            for itself. We changed the skyline in Bangalore, created landmark
            developments in Kerala and have stepped into Delhi – NCR, Chennai,
            Coimbatore, Mysore, Pune and many more to follow.
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
      <div className="">
        <div className="bg-white p-32">
          <p>
            Disclaimer: The content is for information purposes only and does
            not constitute an offer to avail of any service. Prices mentioned
            are subject to change without notice and properties mentioned are
            subject to availability. Images for representation purposes only.
            This is the official website of authorized marketing partner. We may
            share data with RERA registered brokers/companies for further
            processing. We may also send updates to the mobile number/email id
            registered with us. All Rights Reserved.
          </p>
          <p>Pentagon Real Estate : RERA NO : A09600029014</p>
        </div>
      </div>
    </div>
  );
}
