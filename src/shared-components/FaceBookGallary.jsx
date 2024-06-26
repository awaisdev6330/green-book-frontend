import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext"; // Import your context

export default function FacebookGallarySection() {
  const { isDarkMode } = useTheme(); // Access theme context

  return (
    <div className={isDarkMode ? "bg-white" : "bg-gray-900"}>
      <main>
        <div>
          <section aria-labelledby="sale-heading">
            <div
              className={
                isDarkMode
                  ? "overflow-hidden pt-40 sm:pt-14 bg-white"
                  : "overflow-hidden pt-40 sm:pt-14 bg-gray-900"
              }
            >
              <div className={isDarkMode ? "bg-white" : "bg-gray-900"}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                  <div
                    className={
                      isDarkMode
                        ? "relative pb-26 pt-60 sm:pb-24 bg-white"
                        : "relative pb-26 pt-60 sm:pb-24 bg-gray-900"
                    }
                  >
                    <div className="flex space-x-6 sm:-mt-60 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <Link to="https://www.facebook.com/thechildrengreenbook">
                        <div className="flex-shrink-0">
                          <img
                            className="h-24 w-24 object-cover md:h-24 md:w-24 m-4"
                            src="/assets/images/fb_banner_images/fb_icon.png"
                            alt="No image Fetch"
                          />
                        </div>
                      </Link>
                    </div>
                    <Link to="https://www.facebook.com/thechildrengreenbook">
                      <h2
                        id="sale-heading"
                        className={
                          isDarkMode
                            ? "text-2xl font-bold tracking-tight text-gray-900 md:text-2xl m-4"
                            : "text-2xl font-bold tracking-tight text-white md:text-2xl m-4"
                        }
                      >
                        Visit Our
                        <br />
                        Facebook Page &rarr;
                      </h2>
                    </Link>

                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                      <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                        <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="flex-shrink-0">
                              <img
                                className="h-64 w-64   object-cover md:h-72 md:w-72"
                                src="/assets/images/fb_banner_images/img1.jpg"
                                alt="No image Fetch"
                              />
                            </div>
                          </Link>
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div
                              className={
                                isDarkMode
                                  ? "mt-6 flex-shrink-0 sm:mt-0"
                                  : "mt-6 flex-shrink-0 sm:mt-0"
                              }
                            >
                              <img
                                className="h-64 w-64   object-cover md:h-72 md:w-72"
                                src="/assets/images/fb_banner_images/img2.jpg"
                                alt="No image Fetch"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="flex space-x-6 sm:-mt-16 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="flex-shrink-0">
                              <img
                                className="h-64 w-64 object-cover md:h-72 md:w-72"
                                src="/assets/images/fb_banner_images/img3.jpg"
                                alt="No image Fetch"
                              />
                            </div>
                          </Link>
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="mt-6 flex-shrink-0 sm:mt-0">
                              <img
                                className="h-64 w-64   object-cover md:h-72 md:w-72"
                                src="/assets/images/fb_banner_images/img4.jpg"
                                alt="No image Fetch"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="flex-shrink-0">
                              <img
                                className="h-64 w-64   object-cover md:h-72 md:w-72"
                                src="/assets/images/fb_banner_images/img5.jpg"
                                alt="No image Fetch"
                              />
                            </div>
                          </Link>
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="mt-6 flex-shrink-0 sm:mt-0">
                              <img
                                className="h-64 w-64   object-cover md:h-72 md:w-72"
                                src="/assets/images/fb_banner_images/img6.jpg"
                                alt="No image Fetch"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
