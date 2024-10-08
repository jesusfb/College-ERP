import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="loader-pencil-content">
        <div className="btn">
          <svg
            id="loader-pencil"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 677.34762 182.15429"
          >
            <g>
              <path
                id="body-pencil"
                d="M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z"
              ></path>
              <path
                id="line"
                d="M134.482 157.147v25l518.57.008.002-25-518.572-.008z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-3xl h-14 overflow-hidden">
            Loading <span className="dot overflow-hidden">.</span>
            <span className="dot overflow-hidden">.</span>
            <span className="dot overflow-hidden">.</span>
            <span className="dot overflow-hidden">.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
