const customerInfo = () => {
  return (
    <div className="pt-8 mx-auto max-w-3xl">
      <h2 className="mb-6 pb-1 text-xl font-medium text-gray-900 border-b-2 border-primary-500">
        Customer Information
      </h2>
      <form action="#">
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
          <div className="">
            <label className="block mb-2 text-sm font-light text-gray-900">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500  block w-full p-2"
              placeholder="Type first name"
              required="true"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-light text-gray-900">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 block w-full p-2"
              placeholder="Type last name"
              required="true"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-light text-gray-900">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 block w-full p-2"
              placeholder="Type email"
              required="true"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-light text-gray-900">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="phone"
              id="phone-input"
              className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 block w-full p-2"
              placeholder="Type phone number"
              required="true"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default customerInfo;
