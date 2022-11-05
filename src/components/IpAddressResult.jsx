const IpAddressResult = ({ addressData }) => {
  const { ip, time_zone, city, country_code2, isp } = addressData;

  return (
    <div className="flex flex-col items-center justify-evenly gap-4 lg:flex-row lg:gap-0">
      <div className="space-y-2 flex-1 px-4 lg:border-r lg:border-gray-300 text-center lg:text-left ">
        <p className="text-DarkGray uppercase text-sm font-medium">
          ip address
        </p>
        <h2 className="text-black font-medium lg:text-lg">{ip}</h2>
      </div>
      <div className="space-y-2 flex-1 px-4 lg:border-r lg:border-gray-300 text-center lg:text-left ">
        <p className="text-DarkGray uppercase text-sm font-medium">location</p>
        <h2 className="text-black lg:text-lg font-medium">
          {`${city}, ${country_code2}`}
        </h2>
      </div>
      <div className="space-y-2 flex-1 px-4 lg:border-r lg:border-gray-300 text-center lg:text-left ">
        <p className="text-DarkGray uppercase text-sm font-medium">timezone</p>
        <h2 className="text-black lg:text-lg font-medium">{time_zone?.name}</h2>
      </div>
      <div className="space-y-2 flex-1 px-4 text-center lg:text-left">
        <p className="text-DarkGray uppercase text-sm font-medium">isp</p>
        <h2 className="text-black lg:text-lg font-medium">{isp}</h2>
      </div>
    </div>
  );
};

export default IpAddressResult;
