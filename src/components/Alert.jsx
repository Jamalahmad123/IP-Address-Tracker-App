import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import errorIcon from "../assets/error.png";

const Alert = () => {
  const { alert } = useContext(GlobalContext);

  return (
    alert && (
      <div className="flex items-center justify-center gap-1 my-2">
        {alert.type === "error" && (
          <img
            src={errorIcon}
            alt="error-Icon"
            className="w-6 h-6 object-cover"
          />
        )}
        <h3 className="text-white font-bold text-base">{alert.msg}</h3>
      </div>
    )
  );
};

export default Alert;
