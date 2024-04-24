import { Link } from "react-router-dom";

export default function HomeOrderSection() {
  return (
    <>
      <div className="relative mx-auto flex max-w-12xl flex-col items-center text-center mt-10 sm:mt-10 xl:mx-auto xl:max-w-7xl xl:px-8 bg-gray-900 px-6 py-20 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
            GET A COPY
          </h2>
          <p className="mt-4 font-base leading-8 text-gray-300">
            If you wish to get a hard copy of The Children's Green Book, please
            click the button below:
          </p>
        </div>
        <Link
          to="place-order"
          className="mt-8 block rounded-md border border-transparent bg-gray-100 px-5 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 sm:w-auto"
        >
          ORDER A COPY
        </Link>
      </div>
    </>
  );
}
