"use client";
import React, { useState } from "react";

function DirectoryPage(): React.JSX.Element {
  const [viewMode, setViewMode] = useState("grid");

  const businesses = [
    {
      name: "Tech Solutions",
      address: "1234 Innovation Way, San Francisco, CA",
      logoUrl: "https://via.placeholder.com/100",
      website: "https://techsolutions.com",
    },
    {
      name: "Creative Minds",
      address: "5678 Art Blvd, New York, NY",
      logoUrl: "https://via.placeholder.com/100",
      website: "https://creativeminds.com",
    },
    {
      name: "Green Earth",
      address: "9101 Green St, Portland, OR",
      logoUrl: "https://via.placeholder.com/100",
      website: "https://greenearth.com",
    },
    {
      name: "Urban Eatery",
      address: "2345 Food Ave, Austin, TX",
      logoUrl: "https://via.placeholder.com/100",
      website: "https://urbaneatery.com",
    },
  ];

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  return (
    <main className="py-16 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Business Directory</h1>
        <button
          onClick={toggleViewMode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Switch to {viewMode === "grid" ? "List" : "Grid"} View
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {businesses.map((business, index) => (
            <div key={index} className="border rounded-lg p-4 shadow">
              <img
                src={business.logoUrl}
                alt={`${business.name} logo`}
                className="h-20 w-20 object-contain mx-auto mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{business.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{business.address}</p>
              <a
                href={business.website}
                className="text-blue-500 hover:underline"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      ) : (
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Logo</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Address</th>
              <th className="px-4 py-2 border-b">Website</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((business, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">
                  <img
                    src={business.logoUrl}
                    alt={`${business.name} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </td>
                <td className="px-4 py-2 border-b">{business.name}</td>
                <td className="px-4 py-2 border-b">{business.address}</td>
                <td className="px-4 py-2 border-b">
                  <a
                    href={business.website}
                    className="text-blue-500 hover:underline"
                  >
                    Visit Website
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default DirectoryPage;
