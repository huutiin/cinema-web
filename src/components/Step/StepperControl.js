import React from "react";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container mb-8 flex justify-around mt-4">
      <button
        onClick={() => {
          if (currentStep === 1) return;
          handleClick("");
        }}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold border-2 border-slate-300 
    ${
      currentStep === 1
        ? "opacity-50 cursor-not-allowed"
        : "cursor-pointer hover:bg-slate-700 hover:text-white"
    }
    transition-all duration-300 ease-in-out`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in-out"
      >
        {currentStep === steps.length ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
