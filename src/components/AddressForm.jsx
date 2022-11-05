import { useContext, useState } from "react";
import arrowIcon from "../assets/icon-arrow.svg";
import GlobalContext from "../context/GlobalContext";
import Alert from "./Alert";
import IpAddressResult from "./IpAddressResult";
import Spinner from "./Spinner";

const AddressForm = () => {
  const { addressData, isLoading, showMessage, searchIPAddress, ipRes } =
    useContext(GlobalContext);
  const [text, setText] = useState("");

  const handleText = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      showMessage("Please Enter an IP Address", "error");
    } else if (text !== "" && ipRes) {
      showMessage(ipRes, "error");
    } else {
      searchIPAddress(text);
      setText("");
    }
  };

  return (
    <header className="bg-headerBG h-[225px] bg-no-repeat bg-cover bg-center relative z-[999]">
      <div className="container mx-auto px-4 z-[9999]">
        <div className="flex items-center justify-center flex-col pt-6 gap-4 mb-6">
          <h1 className="text-white text-2xl font-bold md:text-3xl">
            IP Address Tracker
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <Alert />
            <div className="md:w-[500px] p-3 bg-white rounded-xl relative mx-auto">
              <input
                type="text"
                className="bg-white text-VeryDarkGray text-lg w-full outline-none focus:outline-none placeholder:text-gray-400"
                placeholder="Search for any IP address or domain"
                value={text}
                onChange={handleText}
              />
              <button className="bg-black w-12 absolute h-full top-0 right-0 flex items-center justify-center rounded-r-xl outline-none focus:outline-none border-none hover:opacity-90">
                <img src={arrowIcon} alt="icon-arrow" className="" />
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white py-4 px-2 rounded-xl mx-auto shadow-xl max-w-xl  lg:max-w-5xl z-[9999]">
          {!isLoading ? (
            <IpAddressResult addressData={addressData} />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </header>
  );
};

export default AddressForm;
