import React, { useState, useEffect } from "react";
import Stepper from "./Step/Stepper";

const MultiStep = ({
  isOpen,
  onClose,
  currentStep,
  setCurrentStep,
  steps,
  children,
}) => {
  const handleClick = (direction) => {
    let newStep = currentStep;
    console.log(newStep);

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    console.log(direction);
  };
  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white`}
    >
      <div className=" container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="my-10 p-10">{children}</div>
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
      {/* <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
        /> */}
    </div>
  );
};

export default MultiStep;
