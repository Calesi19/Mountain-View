import Image from "next/image";

export default function Home() {
  return (
    <main className=" py-16">
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="relative bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
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
              <p className="mt-1 text-gray-800">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <p className="mt-5 text-xs text-gray-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
