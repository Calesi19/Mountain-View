import Image from "next/image";

export default function Home() {
  return (
    <main className=" py-16">
      <Hero />
    </main>
  );
}

// Path: app/page.tsx

function Hero() {
  return (
    <section className="w-full">
      <div className="container mx-auto w-full">
        <div className="flex gap-4 w-full">
          <HeroCard />
          <WeatherCard />
        </div>

      </div>
    </section>
  );
}


function HeroCard() {
  return (
    <div className="relative bg-white border shadow-sm rounded-xl w-full ">
      <div className="w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          className="rounded-xl"
          src="/hero.jpg"
          alt="Image Description"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 start-0 end-0">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">Card title</h3>
          <p className="mt-1 text-white">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <p className="mt-5 text-xs text-gray-500">Last updated 5 mins ago</p>
        </div>
      </div>
    </div>
  );
}

function WeatherCard() {
  return (
    <div className="relative bg-white border shadow-sm rounded-xl aspect-square h-[400px] ">
      <div className="w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          className="rounded-xl"
          src="/hero.jpg"
          alt="Image Description"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 start-0 end-0">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">Card title</h3>
          <p className="mt-1 text-white">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <p className="mt-5 text-xs text-gray-500">Last updated 5 mins ago</p>
        </div>
      </div>
    </div>
  );
}