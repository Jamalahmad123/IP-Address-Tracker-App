import { useState, createContext, useEffect } from "react";

const GlobalContext = createContext();

const IP_ENDPOINT = import.meta.env.VITE_ENDPOINT;

export const GlobalContextProvider = ({ children }) => {
  const [addressData, setAddressData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [ipRes, setIpRes] = useState(null);

  useEffect(() => {
    getIPAddress();
  }, []);

  // Get user IP Address
  async function getIPAddress() {
    setIsLoading(true);
    const response = await fetch(IP_ENDPOINT);

    const data = await response.json();
    setAddressData(data);
    setIsLoading(false);
  }

  // Get IP Address Based on Search
  async function searchIPAddress(ipAddress) {
    setIsLoading(true);
    try {
      const response = await fetch(`${IP_ENDPOINT}&ip=${ipAddress}`);

      if (response.status !== "ok") {
        throw new Error("Invalid IP Address");
      }

      const data = await response.json();
      setAddressData(data);
      setIpRes(null);
    } catch (error) {
      setIpRes(error.message);
    }

    setIsLoading(false);
  }

  function showMessage(msg, type) {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <GlobalContext.Provider
      value={{
        addressData,
        alert,
        ipRes,
        isLoading,
        searchIPAddress,
        showMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
