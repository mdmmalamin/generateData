/* eslint-disable react/prop-types */
const Citizen = ({city}) => {
  console.log(city?.citizens);
  return (
    <>
    { city ?
      city?.citizens?.map((citizen, idx) =>
        
        <div key={idx} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body relative">
            <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-500/75 font-bold text-white">{idx +1}</div>
            <h2 className="card-title">Name: {citizen.name}</h2>
            <p>Age: {citizen.age}</p>
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