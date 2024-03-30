
const reservationDetails = (props) => {
  return (
    <div className="pt-8 mx-auto max-w-3xl">
          <h2 className="mb-6 pb-1 text-xl font-medium text-gray-900 border-b-2 border-primary-500">
          Reservation Details
          </h2>
          <form action="#">
            <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
              <div className="">
                <label
                  className="block mb-2 text-sm font-light text-gray-900"
                >
                  Reservation ID <span className="text-red-600"></span>
                </label>
                <input
                  type="text"
                  name="reservation"
                  id="reservation"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                  placeholder="Type reservation id"
                  required=""
                />
              </div>
              <div className="">
                <label
                  className="block mb-2 text-sm font-light text-gray-900"
                >
                  Pickup Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  name="pickup-date"
                  id="pickup-date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                  placeholder="Select Date and Time"
                  onChange={props.fromDate}
                />
              </div>
              <div className="">
                <label
                  className="block mb-2 text-sm font-light text-gray-900"
                >
                  Return Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  name="return-date"
                  id="return-date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                  placeholder="Select Date and Time"
                  onChange={props.toDate}
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm font-light text-gray-900"
                >
                  Duration <span className="text-red-600"></span>
                </label>
                <div
                  id="duration"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md p-2 px-12 w-auto text-center"
                  >
                  <p>
                    {props.weeks} Week {props.days} Day
                    </p>
                  </div>
              </div>
              <div className="">
                <label
                  className="block mb-2 text-sm font-light text-gray-900"
                >
                  Discount <span className="text-red-600"></span>
                </label>
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                  placeholder="Type discount"
                  required=""
                />
              </div>
            </div>
          </form>
        </div>
  )
}

export default reservationDetails