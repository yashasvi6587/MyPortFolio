import React from "react";
import { banners } from "../../assets/banners";

const Banner = () => {
  // Split banners manually
  const firstRow = banners.slice(0, 3);
  const secondRow = banners.slice(3, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-10 px-6">
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-14 drop-shadow-md">
        🌟 My Banners 🌟
      </h1>

      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {firstRow.map((banner) => (
          <a
            key={banner.name}
            href={banner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs transform transition duration-500 hover:scale-110 hover:rotate-1 group perspective"
          >
            <div
              className="bg-white p-6 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-rotate-x-6 group-hover:rotate-y-6"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <img
                src={banner.img}
                alt={banner.name}
                className="h-32 w-32 object-contain mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
              />
              <p className="text-xl font-bold text-center text-gray-700 group-hover:text-indigo-600 transition duration-300 drop-shadow-sm">
                {banner.name}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-10">
        {secondRow.map((banner) => (
          <a
            key={banner.name}
            href={banner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs transform transition duration-500 hover:scale-110 hover:rotate-1 group perspective"
          >
            <div
              className="bg-white p-6 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-rotate-x-6 group-hover:rotate-y-6"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <img
                src={banner.img}
                alt={banner.name}
                className="h-32 w-32 object-contain mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
              />
              <p className="text-xl font-bold text-center text-gray-700 group-hover:text-indigo-600 transition duration-300 drop-shadow-sm">
                {banner.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
