import React from "react";
import Image from "next/image";
import Map from "./image/map.png"

export default function Home() {
  return (
    <div className="relative">
      {/* Image */}
      <Image src={Map} alt="Map Here" className="absolute inset-0 w-full h-full z-00" />

      {/* First Input Bar */}
      <div className="relative z-10">
        <label htmlFor="origin" className="block text-sm font-medium leading-6 text-gray-900">
        Origin
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm"></span>
          </div>
          <input
            type="text"
            name="origin"
            id="origin"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Origin"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>transit</option>
              <option>driving</option>
              <option>bicycling</option>
              <option>walking</option>
            </select>
          </div>
        </div>
      </div>

      {/* Second Input Bar (Quantity) */}
      <div className="relative z-10 mt-4">
        <label htmlFor="destination" className="block text-sm font-medium leading-6 text-gray-900">
          Destination
        </label>
        <input
          type="text"
          name="destination"
          id="destination"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Destination"
        />
      </div>
    </div>
  );

}



Home.requireAuth = true

