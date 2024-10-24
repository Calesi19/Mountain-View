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

  return (
    <main className="py-16 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Business Directory</h1>
        <div className="inline-flex rounded-lg shadow-sm">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ${viewMode === "grid" ? "bg-gray-100" : ""
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-grid"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ${viewMode === "list" ? "bg-gray-100" : ""
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list-ul"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              />
            </svg>
          </button>
        </div>
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
