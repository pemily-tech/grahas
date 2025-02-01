import { ImagePlaceholder } from '@grahas/ui';

export default function Index() {
  return (
    <div className="relative">
      <div className="absolute top-0 z-10 p-16">
        <h1 className="text-24 text-white">Bangalore Dream House</h1>
      </div>
      <ImagePlaceholder
        src="/images/bg.jpeg"
        containerClasses="h-screen w-full"
        imageClasses="object-cover"
      />
    </div>
  );
}
