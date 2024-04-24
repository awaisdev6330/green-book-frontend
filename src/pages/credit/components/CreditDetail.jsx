import { Link } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContext";

const categories = [
  {
    name: "Dreamstime",
    to: "https://www.dreamstime.com/photos-images/garden-park.html",
    imageSrc:
      "https://thechildrengreenbook.net/assets/images/banners/slider-1.jpg",
    imageAlt: "No Image Fetch",
    description: "",
  },
  {
    name: "Seed Releaf is a fiscally sponsored project of MarinLink, a California nonprofit corporation exempt from federal tax under section 501(c)(3) of the Internal Revenue Service #20- 0879422.",
    to: "https://www.seedreleaf.org/",
    imageSrc:
      "https://thechildrengreenbook.net/assets/images/banners/slider-3.jpg",
    imageAlt: "No Image Fetch",
    description: "",
  },
];

export default function CreditDetail() {
  const { isDarkMode } = useTheme(); // Get the current theme mode

  return (
    <div className={isDarkMode ? "bg-gray-900" : "bg-white"}> {/* Apply dark or light background */}
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className={isDarkMode ? "text-white" : "text-gray-900"}> {/* Apply dark or light text color */}
          Credit / Resource
        </h2>
        <div className="mt-4 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <Link key={category.name} to={category.to} className="group block">
              <div
                aria-hidden="true"
                className={`aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`} // Apply dark or light background
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className={isDarkMode ? "mt-4 text-white" : "mt-4 text-gray-900"}> {/* Apply dark or light text color */}
                {category.name}
              </h3>
              <p className={isDarkMode ? "mt-2 text-gray-300" : "mt-2 text-gray-500"}> {/* Apply dark or light text color */}
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
