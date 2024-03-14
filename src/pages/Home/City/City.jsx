import Citizen from "../Citizen/Citizen";

const City = () => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium text-center">
        City :
      </div>
      <div className="collapse-content grid grid-cols-3 gap-5"> 
        <Citizen />
      </div>
    </div>
  );
};

export default City;