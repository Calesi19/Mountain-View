import React from "react";

export default function DiscoveryPage(): React.JSX.Element {
  return (
    <main className=" py-16">
      <PlaceShowcase />
      <PlaceList />
    </main>
  );
}

function PlaceShowcase(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center">
        Discover the best places in Mountain View
      </h2>
      <p className="text-lg text-center mt-4">
        Visit the top places in the city and enjoy the best local food and
        drinks.
      </p>
      <div className="flex my-8">
        <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 ">
          <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-2 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              id="segment-item-1"
              data-hs-tab="#segment-1"
              aria-controls="segment-1"
              role="tab"
            >
              All
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-2 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              id="segment-item-2"
              data-hs-tab="#segment-2"
              aria-controls="segment-2"
              role="tab"
            >
              Food
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-2 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              id="segment-item-3"
              data-hs-tab="#segment-3"
              aria-controls="segment-3"
              role="tab"
            >
              Shopping
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-2 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              id="segment-item-3"
              data-hs-tab="#segment-3"
              aria-controls="segment-3"
              role="tab"
            >
              Entertainment
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-2 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              id="segment-item-3"
              data-hs-tab="#segment-3"
              aria-controls="segment-3"
              role="tab"
            >
              Scenery
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

function PlaceList(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </div>
    </div>
  );
}

function PlaceCard(): React.JSX.Element {
  return (
    <div className="bg-white border shadow-sm rounded-xl">
      <div className="w-full h-[200px] rounded-t-xl overflow-hidden">
        <img
          className="rounded-t-xl"
          src="https://source.unsplash.com/random/800x600"
          alt="Image Description"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">Card title</h3>
        <p className="mt-1 text-gray-500">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <p className="mt-5 text-xs text-gray-500">Last updated 5 mins ago</p>
      </div>
    </div>
  );
}
