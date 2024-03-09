import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogPostCarousel from "@/components/Activities";

export default function Home() {
  return (
    <main className=" py-16">
      <Hero />
      <BlogPostCarousel />
    </main>
  );
}

// Path: app/page.tsx

function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <div className="container mx-auto w-full grid grid-cols-3 gap-4">
        <HeroCard />

        <WeatherCard />

        <NetworkingCard />
        <BusinessCard />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative bg-white border shadow-sm rounded-xl w-full col-span-2">
      <div className="w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          className="rounded-xl"
          src="/hero2.jpg"
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
    <div className="w-full">
      <div className="group relative bg-white border text-white shadow-sm rounded-xl aspect-square w-[400px] h-[400px] transition-transform ease-in-out duration-1000 overflow-hidden ">
        <div className="w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            className="rounded-xl group-hover:blur-sm filter brightness-50 transform transition-transform ease-in-out duration-1000 group-hover:scale-105 group-hover:rotate-2 group-hover:translate-x-2 group-hover:translate-y-2"
            src="/hero.jpg"
            alt="Image Description"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute top-0 start-0 end-0">
          <div className="p-4 md:p-5 bg-gradient-to-b from-[#000000] rounded-xl">
            <h3 className="text-lg font-bold">Network</h3>
            <p className="mt-1">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
          </div>
        </div>
        <div className="flex absolute bottom-0 right-0">
          <div className="flex p-6 items-center gap-2">
            Explore
            <FaArrowRightLong className="text-xl group-hover:translate-x-1 transition-transform ease-in-out duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkingCard() {
  return (
    <div className="group relative bg-white border text-white shadow-sm rounded-xl overflow-hidden aspect-square h-[400px] transition-transform ease-in-out duration-1000 ">
      <div className="w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          className="rounded-xl group-hover:blur-sm transform transition-transform ease-in-out duration-1000 group-hover:scale-105 group-hover:rotate-1 group-hover:translate-x-1 group-hover:translate-y-1"
          src="/network.jpg"
          alt="Image Description"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-0 start-0 end-0">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold">Network</h3>
          <p className="mt-1">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
        <div className="w-full absolute top-0 h-[200px] bg-gradient-to-b from-[#000000]" />
      </div>
      <div className="flex absolute bottom-0 right-0">
        <div className="flex p-6 items-center gap-2">
          Explore
          <FaArrowRightLong className="text-xl group-hover:translate-x-1 transition-transform ease-in-out duration-200" />
        </div>
      </div>
    </div>
  );
}

function BusinessCard() {
  return (
    <div className="relative bg-white border shadow-sm rounded-xl aspect-square h-[400px] transition-transform ease-in-out duration-1000 ">
      <div className="w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          className="rounded-xl group-hover:blur-sm"
          src="/network.jpg"
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
      <div className="flex absolute bottom-0 right-0">
        <div className="flex p-5 items-center gap-2">
          Explore
          <FaArrowRightLong className="text-xl hover:rotate-[-45deg] transition-transform ease-in-out duration-200" />
        </div>
      </div>
    </div>
  );
}
