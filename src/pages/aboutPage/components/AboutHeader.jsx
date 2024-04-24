import { useTheme } from "../../../contexts/ThemeContext";

export default function AboutHeaderSection() {
  const { isDarkMode } = useTheme();

  // Define dynamic classes based on the theme mode
  const headerBgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";

  return (
    <>
   <section aria-labelledby="cause-heading">
        <div className="relative bg-gray-900 px-6 py-12 sm:px-12 sm:py-40 lg:px-16">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://thechildrengreenbook.net/assets/images/banners/page-banner-42.jpg"
              alt="No image Fetch"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
      
    </>
  );
}


