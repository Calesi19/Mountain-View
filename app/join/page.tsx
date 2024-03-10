import React from "react";

export default function JoinPage(): React.JSX.Element {
  return (
    <main className=" py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Join the Chamber
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Membership Benefits</h2>
            <p>
              The Mountain View Chamber of Commerce is a voluntary organization
              of business and professional people working to improve business
              and build a better community. We are a nonprofit organization
              funded by membership dues, fundraising activities, and proceeds
              from Chamber events. The Chamber is not a government agency and
              does not receive funds from the City of Mountain View.
            </p>
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden">
            <img src="/group.jpg" alt="Chamber Group" />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold my-4 container">Membership Levels</h2>
      <MembershipPlans />
    </main>
  );
}

function MembershipPlans(): React.JSX.Element {
  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center container">
      <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 h-full">
        <h4 className="font-medium text-lg text-gray-800 ">Non-Profits</h4>
        <span className="mt-7 font-bold text-5xl text-gray-800 ">Free</span>
        <p className="mt-2 text-sm text-gray-500">Forever free</p>

        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">For non-profit organizations</span>
          </li>

          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">No fees</span>
          </li>
        </ul>
        <div className="h-full" />
        <a
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none "
          href="#"
        >
          Sign up
        </a>
      </div>

      <div className="flex h-full flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 ">
        <p className="mb-3">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800">
            Most popular
          </span>
        </p>
        <h4 className="font-medium text-lg text-gray-800 ">Silver</h4>
        <span className="mt-5 font-bold text-5xl text-gray-800 ">
          <span className="font-bold text-2xl">$</span>
          50
        </span>
        <p className="mt-2 text-sm text-gray-500">
          All the basics for starting a new business
        </p>

        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">15% Off Events</span>
          </li>

          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">10% Off Advertising</span>
          </li>
        </ul>
        <div className="h-full" />
        <a
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
          href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
        >
          Sign up
        </a>
      </div>

      <div className="flex h-full flex-col border border-gray-200 text-center rounded-xl p-8 ">
        <h4 className="font-medium text-lg text-gray-800 ">Gold</h4>
        <span className="mt-5 font-bold text-5xl text-gray-800">
          <span className="font-bold text-2xl -me-1">$</span>
          100
        </span>
        <p className="mt-2 text-sm text-gray-500">
          Everything you need for a growing business
        </p>

        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800">25% Off Events</span>
          </li>

          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800">15% Off Advertisement</span>
          </li>

          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800">
              Free Participation in Trade Fair
            </span>
          </li>
        </ul>
        <div className="h-full" />

        <a
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Sign up
        </a>
      </div>

      <div className="flex h-full flex-col border border-gray-200 text-center rounded-xl p-8">
        <h4 className="font-medium text-lg text-gray-800 ">Platinum</h4>
        <span className="mt-5 font-bold text-5xl text-gray-800 ">
          <span className="font-bold text-2xl -me-1">$</span>
          149
        </span>
        <p className="mt-2 text-sm text-gray-500">
          Advanced features for scaling your business
        </p>

        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">50% Off Events</span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">50% Off Advertisement</span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">
              Free Participation in Trade Fair
            </span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">5 Free Featured Ads per Year</span>
          </li>{" "}
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 ">1 Free Training per Quarter</span>
          </li>{" "}
        </ul>
        <div className="h-full" />
        <a
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Sign up
        </a>
      </div>
    </div>
  );
}
