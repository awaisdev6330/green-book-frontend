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
      "https://images.unsplash.com/photo-1532506359657-a863476b06b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1535882832-ac75c142f79f?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1488655980602-a2d28399df6c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1488655980602-a2d28399df6c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    imageSrc:
      "https://images.unsplash.com/photo-1535882832-ac75c142f79f?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    imageSrc:
      "https://images.unsplash.com/photo-1532506359657-a863476b06b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="../../../../public/assets/images/about-us.jpg"
                alt=""
                className="object-cover object-center"
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
