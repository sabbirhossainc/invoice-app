const additionalCharges = (props) => {
  return (
    <div className="pt-8 mx-auto max-w-3xl">
      <h2 className="mb-6 pb-1 text-xl font-medium text-gray-900 border-b-2 border-primary-500">
        Additional Charges
      </h2>
      <form action="#">
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
          <div className="flex items-center justify-between w-full">
            <input
              type="checkbox"
              name="collision"
              className="size-4"
              checked={props.collision}
              onChange={props.onChange}
            />
            <label className="inline-block text-base font-light text-gray-900 px-2">
              Collision Damage Waiver <span className="text-red-600"></span>
            </label>
            <p className="text-gray-900 text-sm ml-auto">$9.00</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <input
              type="checkbox"
              name="liability"
              className="size-4"
              checked={props.liability}
              onChange={props.onChange}
            />
            <label className="inline-block text-base font-light text-gray-900 px-2">
            Liability Insurance <span className="text-red-600"></span>
            </label>
            <p className="text-gray-900 text-sm ml-auto">$15.00</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <input
              type="checkbox"
              name="rental"
              className="size-4"
              checked={props.rental}
              onChange={props.onChange}
            />
            <label className="inline-block text-base font-light text-gray-900 px-2">
            Rental Tax <span className="text-red-600"></span>
            </label>
            <p className="text-gray-900 text-sm ml-auto">11.5%</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default additionalCharges;
