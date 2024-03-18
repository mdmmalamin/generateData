/* eslint-disable react/prop-types */
const Citizen = ({city}) => {
  // console.log(city?.citizens);
  return (
    <>
    { city ?
      city?.citizens?.map((citizen, idx) =>
        
        <div key={idx} className="w-96 bg-base-100 shadow-xl">
          <div className="flex justify-start gap-2.5 p-2.5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={`${citizen.src}`} />
                
              </div>
            </div>
            <div className="w-[1px] bg-black"></div>
            <div className="divide-y space-y-2">
              <h2>Name: {citizen.fullName}</h2>
              <p>Age: {citizen.age}</p>
              <h2>Gender: {citizen.gender}</h2>
              <p>Phone: {citizen.phone}</p>
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