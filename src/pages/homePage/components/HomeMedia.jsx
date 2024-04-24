import { Link } from "react-router-dom";

export default function HomeMediaSection() {
  return (
    <>
      <section aria-labelledby="category-heading" className="bg-light mt-10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-2 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Media
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <img
                src="https://thechildrengreenbook.net/assets/images/media/Screenshot_select-area_20230215164123.png"
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-cover object-center group-hover:opacity-75"
              />

              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />
              <div className="flex items-end p-6">
                <div>
                  <Link to="https://e.dunya.com.pk/index.php?e_name=MUL&edate=2022-12-31&page=109">
                    <h3 className="font-semibold text-gray-800">
                      <span className=" inset-0" />
                      Duniya News Multan
                    </h3>
                    <p
                      aria-hidden="true"
                      className="mt-1 text-sm text-gray-800 button"
                    >
                      View Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img
                src="	https://thechildrengreenbook.net/assets/images/media/6540602_15693339.jpg"
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <Link to="https://www.thenews.com.pk/tns/detail/1028192-climate-change-a-compilation-of-stories">
                    <h3 className="font-semibold text-white">
                      <span className=" inset-0" />
                      Climate change: a compilation of stories
                      <p>Date 2022-12-31</p>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      View Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img
                src="	https://thechildrengreenbook.net/assets/images/media/Screenshot_select-area_20230215162955.png"
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <Link to="https://www.dawn.com/news/1690984/public-school-students-to-get-book-on-climate-change">
                    <h3 className="font-semibold text-white">
                      <span className=" inset-0" />
                      <p>Date 2022-05-23</p>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      View Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
