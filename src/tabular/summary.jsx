const summary = (props) => {
  let totalDaysRate = props.days * 99;
  let totalWeeksRate = props.weeks * 390;
  let collisionRate = 0;
  let liabilityRate = 0;
  let rentalRate = "";

  if (props.collisionState) {
   collisionRate = 9;
  } if (props.liabilityState) {
    liabilityRate = 15;
  } if (props.rentalState) {
   rentalRate = '11.5%';
  } 

  let total = totalDaysRate+totalWeeksRate;

          

  return (
    <div className="pt-8 max-w-3xl">
      <h2 className="mb-6 pb-1 text-xl font-medium text-gray-900 border-b-2 border-primary-500">
        Charges Summary
      </h2>
      <div className="w-full mx-auto overflow-auto bg-primary-100 p-3 rounded-md ring-1 ring-primary-500">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead className="border-b-2 border-primary-500">
            <tr>
              <th className="px-2 py-4 title-font text-gray-900 text-base">
                Charge
              </th>
              <th className="px-2 py-4 title-font text-gray-900 text-base">
                Unit
              </th>
              <th className="px-2 py-4 title-font text-gray-900 text-base">
                Rate
              </th>
              <th className="px-2 py-4 title-font text-gray-900 text-base">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-4 ">Daily</td>
              <td className="px-2 py-4 ">{props.days}</td>
              <td className="px-2 py-4 ">$99.00</td>
              <td className="px-2 py-4 ">${totalDaysRate}.00</td>
            </tr>
            <tr>
              <td className="px-2 py-4 ">Weekly</td>
              <td className="px-2 py-4 ">{props.weeks}</td>
              <td className="px-2 py-4 ">$390.00</td>
              <td className="px-2 py-4 ">${totalWeeksRate}.00</td>
            </tr>
            <tr className={`${props.collision}`} >
              <td className="px-2 py-4">Collision Damage Waiver</td>
              <td></td>
              <td className="px-2 py-4">$9.00</td>
              <td className="px-2 py-4">${collisionRate}.00</td>
            </tr>
            <tr className={`${props.liability}`}>
              <td className="px-2 py-4">Liability Insurance</td>
              <td></td>
              <td className="px-2 py-4">$15.00</td>
              <td className="px-2 py-4">${liabilityRate}.00</td>
            </tr>
            <tr className={`${props.rental}`}>
              <td className="px-2 py-4">Rental Tax</td>
              <td></td>
              <td></td>
              <td className="px-2 py-4">{rentalRate}</td>
            </tr>
          </tbody>
          <thead className="">
            <tr>
              <th className="px-2 py-4 title-font text-gray-900 text-base">
                Total
              </th>
              <th></th>
              <th></th>
              <th className="px-2 py-4 title-font text-gray-900 text-base">
                ${total}
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default summary;
