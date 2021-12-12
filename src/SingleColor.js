import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor, handleClick }) => {
  // console.log(hexColor);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);

    toast.success("Copied To ClipBoard", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      return setAlert(false);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  return (
    <article
      onClick={handleCopy}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">
        <b style={{ fontWeight: "100px" }}>{hexValue}</b>
      </p>
      {alert && (
        <p className="color-value">
          <b>Copied To ClipBoard</b>
          <ToastContainer />
        </p>
      )}
    </article>
  );
};

export default SingleColor;
