export default function PlaceOrderForm() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-3 px-3 mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-2xl">
          PAYMENT MODE
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          The price of The Children's Green Book has been fixed as Rs 500/- per
          copy which will be received on delivery.
        </p>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name<span className="text-rose-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="contact-no"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    CNIC<span className="text-rose-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="contact-no"
                      placeholder=" 03xxxxxxxxx"
                      id="contact-no"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address<span className="text-rose-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="no-of-copy"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No. of Copies<span className="text-rose-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Postal Address<span className="text-rose-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      maxLength={20}
                      minLength={30}
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message (if any)
                  </label>
                  <div className="mt-2">
                    <textarea
                      maxLength={20}
                      minLength={30}
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Confirm Order
            </button>
          </div>
          <p className="mt-10 text-sm leading-6 text-gray-600">
            <span className="text-rose-600">* </span>The delivery would be made
            through registered post at the earliest but not later than 15 days.
          </p>
          <p className="text-sm leading-6 text-gray-600">
            <span className="text-rose-600">* </span>In case of any query,
            please contact:
          </p>
          <p className="text-sm mt-2 font-bold">
            School Education Department,South Punjab
          </p>
          <p className="text-sm mt-2 font-bold">Bosan Road,Multan</p>
          <p className="text-sm mt-2 font-bold italic">061-9210433</p>
        </form>
      </div>
    </>
  );
}
