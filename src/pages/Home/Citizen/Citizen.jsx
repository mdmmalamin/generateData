/* eslint-disable react/prop-types */
const Citizen = ({city}) => {
  // console.log(city?.citizens);
  return (
    <>
    { city ?
      city?.citizens?.map((citizen, idx) =>
        
        <div key={idx} className="w-52 bg-base-100 shadow-xl">
          <div className="flex justify-start gap-2.5 p-2.5">
            <div className="">{idx +1}</div>
            <div className="w-[1px] bg-black"></div>
            <div>
              <h2>Name: {citizen.fullName}</h2>
              <h2>Gender: {citizen.gender}</h2>
              <p>Age: {citizen.age}</p>
            </div>
          </div>
        </div>
      )
        :
        <></>
    }
    </>
  );
};

export default Citizen;