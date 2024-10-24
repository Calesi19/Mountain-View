"use client";

import React, { useState } from "react";

export default function DiscoveryPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <main className="py-16">
      <PlaceShowcase activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <PlaceList activeCategory={activeCategory} />
    </main>
  );
}

interface PlaceShowcaseProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

function PlaceShowcase({ activeCategory, onCategoryChange }: PlaceShowcaseProps): React.JSX.Element {
  const categories = ["All", "Food", "Shopping", "Entertainment", "Scenery"];

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
        <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1">
          <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`hs-tab-active:bg-white hs-tab-active:text-gray-700 py-2 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm ${activeCategory === category ? "text-gray-700" : "text-gray-500"
                  } hover:text-gray-700 font-medium rounded-lg hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none`}
                role="tab"
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

interface PlaceListProps {
  activeCategory: string;
}

function PlaceList({ activeCategory }: PlaceListProps): React.JSX.Element {
  const filteredPlaces = activeCategory === "All"
    ? placeList
    : placeList.filter((place) => place.category === activeCategory);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPlaces.map((place, index) => (
          <PlaceCard
            key={index}
            title={place.title}
            description={place.description}
            img={place.img}
          />
        ))}
      </div>
    </div>
  );
}

interface PlaceCardProps {
  title: string;
  description: string;
  img: string;
}

function PlaceCard({
  title,
  description,
  img,
}: PlaceCardProps): React.JSX.Element {
  return (
    <div className="bg-white border shadow-sm rounded-xl cursor-pointer hover:border-blue-500">
      <div className="w-full h-[200px] rounded-t-xl overflow-hidden">
        <img className="rounded-t-xl h-full w-full object-cover" src={img} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>
    </div>
  );
}


const placeList = [
  {
    title: "Terminal Coffee",
    category: "Food",
    description: "A cozy coffee shop in the heart of the city",
    img: "/terminal-coffee.webp",
  },
  {
    title: "Jayme's Pizza",
    category: "Food",
    description: "The best pizza in town",
    img: "/jaymes-pizza.jpg",
  },
  {
    title: "Mountain View Mall",
    category: "Shopping",
    description: "The biggest mall in the city",
    img: "/mall.jpg",
  },
  {
    title: "Mountain View Park",
    category: "Scenery",
    description: "A beautiful park with a stunning view",
    img: "/park.jpg",
  },
  {
    title: "Alamo Cinema",
    category: "Entertainment",
    description: "The best place to watch a movie",
    img: "/alamo-theater.jpg",
  },
  {
    title: "Mountain View Beach",
    category: "Scenery",
    description: "A beautiful beach with crystal clear water",
    img: "lake-beach.jpg",
  },
  {
    title: "Mountain View Science Museum",
    category: "Entertainment",
    description: "A museum with a collection of ancient artifacts",
    img: "/science-museum.jpg",
  },
  {
    title: "Mountain View Zoo",
    category: "Entertainment",
    description: "A zoo with a variety of animals",
    img: "/zoo.webp",
  },
  {
    title: "Mountain View Art Museum",
    category: "Entertainment",
    description: "A museum with a collection of ancient artifacts",
    img: "/art-museum.jpg",
  },
  {
    title: "Cafe Verde",
    category: "Food",
    description: "A charming cafe known for its organic menu",
    img: "/cafe.jpg",
  },
  {
    title: "The Book Nook",
    category: "Shopping",
    description: "A quaint bookstore with rare finds",
    img: "/book-nook.jpg",
  },
  {
    title: "Seaside Boardwalk",
    category: "Scenery",
    description: "A bustling boardwalk with shops and eateries",
    img: "/boardwalk.jpg",
  },
  {
    title: "Rockside Brewery",
    category: "Food",
    description: "A local brewery offering craft beers",
    img: "/brewery.webp",
  },
  {
    title: "Downtown Farmers Market",
    category: "Shopping",
    description: "A weekend market with fresh produce and local crafts",
    img: "/farmers-market.jpg",
  },
  {
    title: "Skyline Observatory",
    category: "Entertainment",
    description: "An observatory with telescopes for stargazing",
    img: "/observatory.jpg",
  },
  {
    title: "The Blue Lagoon Spa",
    category: "Scenery",
    description: "A spa retreat with a serene atmosphere",
    img: "/spa.jpg",
  },
  {
    title: "Golden Gate Gardens",
    category: "Scenery",
    description: "A lush garden with diverse flora and fauna",
    img: "/gardens.webp",
  },
  {
    title: "Urban Climb",
    category: "Entertainment",
    description: "An indoor rock climbing facility",
    img: "/rock-climbing.webp",
  },
  {
    title: "Lakeside Pier",
    category: "Scenery",
    description: "A scenic pier with a view of the lake",
    img: "/pier.jpg",
  },
  {
    title: "Sunny Heights Amusement Park",
    category: "Entertainment",
    description: "A family-friendly amusement park with rides and games",
    img: "/amusement-park.jpg",
  },
  {
    title: "Harmony Jazz Club",
    category: "Entertainment",
    description: "A live music venue featuring jazz performances",
    img: "/jazz-club.jpg",
  },
];


