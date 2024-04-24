/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const incentives = [
  {
    id: 1,
    imageSrc:
      "/assets/images/gallary_images/gallary1.jpg",
  },
  {
    id: 2,
    imageSrc:
    "/assets/images/gallary_images/gallary1.jpg",
  },
  {
    id: 3,
    imageSrc:
    "/assets/images/gallary_images/gallary1.jpg",
  },

  {
    id: 4,
    imageSrc:
    "/assets/images/gallary_images/gallary1.jpg",
  },
  {
    id: 5,
    imageSrc:
    "/assets/images/gallary_images/gallary1.jpg",
  },
  {
    id: 6,
    imageSrc:
    "/assets/images/gallary_images/gallary1.jpg",
  },
  {
    id: 7,
    imageSrc:
    "/assets/images/gallary_images/gallary1.jpg",
  },
  {
    id: 8,
    imageSrc:
    "/assets/images/gallary_images/gallary1.jpg",
  },
];

export default function HomeGallerySection() {
  return (
    <div className="bg-gray-900 mt-10">
      <div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-12 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-200">
                Gallery
              </h2>
              <p className="mt-4 text-gray-300">
                The book is full of colourful pictures, graphics and
                illustrations and revolves around the story of a young boy and
                girl who intend to lead by example and play their roles in
                spreading awareness of climate change in society. The South
                Punjab School Education Department has brought out the book with
                the help of experts of the Islamia University, Bahawalpur, and
                the MNS University of Agriculture, Multan.
              </p>
            </div>
            <div className="aspect-[3/2] aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="/assets/images/gallary_images/gallary.png"
                alt="No image Fecth"
                className="object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {incentives.map((incentive) => (
              <div key={incentive.id} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img
                    className="rounded-3xl"
                    src={incentive.imageSrc}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
