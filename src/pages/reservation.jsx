import axios from "axios";
import { useEffect, useState } from "react";
import AdditionalCharges from "../forms/additionalCharges";
import CustomerInfo from "../forms/customerInfo";
import ReservationDetails from "../forms/reservationDetails";
import VehicleInfo from "../forms/vehicleInfo";
import ChargesSummary from "../tabular/summary";

function Reservation() {
  
  // Additional charges states
  const [products, setProducts] = useState();
  const [collision, setCollision] = useState(true);
  const [liability, setLiability] = useState(false);
  const [rental, setRental] = useState(false);

  // Date range states
  const [datePickup, setDatePickup] = useState([]);
  const [dateReturn, setDateReturn] = useState([]);
  const [weeks, setWeeks] = useState();
  const [days, setDays] = useState();

  // Additional charges functions
  const handleChange = (e) => {
    if (e.target.name === "collision") {
      setCollision(!collision);
      handleAdd0();
    } else if (e.target.name === "liability") {
      setLiability(!liability);
      handleAdd1();
    } else if (e.target.name === "rental") {
      setRental(!rental);
      handleAdd2();
    }
  };

  const handleAdd0 = () => {
    let classes = "hidden";
    if (collision === true) {
      classes -= "hidden";
    } else {
      classes += "";
    }
    return classes;
  };

  const handleAdd1 = () => {
    let classes = "hidden";
    if (liability === true) {
      classes -= "hidden";
    } else {
      classes += "";
    }
    return classes;
  };

  const handleAdd2 = () => {
    let classes = "hidden";
    if (rental === true) {
      classes -= "hidden";
    } else {
      classes += "";
    }
    return classes;
  };

  // Date range functions
  const handlePickup = (e) => {
    setDatePickup(e.target.value);
  };

  const handelReturn = (e) => {
    setDateReturn(e.target.value);
  };

  const getDateRange = () => {
    let date1 = new Date(datePickup);
    let date2 = new Date(dateReturn);
    let Difference_In_Time;
    let Difference_In_Days;
    let obj;

    // Calculating the time difference no. of days between two dates
    if (date2.getTime() > date1.getTime()) {
      Difference_In_Time = Math.abs(date2.getTime() - date1.getTime());
      Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    } else {
      Difference_In_Days = 0;
    }

    // Extracting weeks and days
    function getWeeks(days) {
      return {
        weeks: Math.floor(days / 7),
        days: Math.floor(days % 7),
      };
    }
    obj = getWeeks(Difference_In_Days);

    // To display result
    setWeeks(obj.weeks);
    setDays(obj.days);
  };

  // fetching data form api
  const callAxios = async () => {
    const fetchUrl = "https://exam-server-7c41747804bf.herokuapp.com/carsList";
    axios
      .get(fetchUrl)
      .then((response) => {
        const getItems = response.data;
        setProducts(getItems.data);
      })
      .catch((er) => er.message);
  };

  useEffect(() => {
    callAxios();
    getDateRange();
  });

  return (
    <>
      <div className="max-w-full mx-36 my-12">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Reservation</h1>
          <button className="flex justify-center items-center px-5 py-3 bg-indigo-500 text-xs font-semibold text-gray-50 rounded-md">
            Print / Download
          </button>
        </div>
        {/* Body */}
        <div className="grid grid-cols-12 gap-8 max-w-full">
          <div className="col-span-4">
            <ReservationDetails
              fromDate={handlePickup}
              toDate={handelReturn}
              weeks={weeks}
              days={days}
            />
            {products ? <VehicleInfo data={products} /> : null}
          </div>
          <div className="col-span-4">
            <CustomerInfo />
            <AdditionalCharges
              onChange={handleChange}
              collision={collision}
              liability={liability}
              rental={rental}
            />
          </div>
          <div className="col-span-4">
            <ChargesSummary
              collision={handleAdd0()}
              liability={handleAdd1()}
              rental={handleAdd2()}
              weeks={weeks}
              days={days}
              collisionState={collision}
              liabilityState={liability}
              rentalState={rental}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
