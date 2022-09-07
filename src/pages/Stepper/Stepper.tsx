/* eslint-disable no-useless-computed-key */
import React from "react";
import clsx from "clsx";

interface IStepperProps {
  steps: number;
}

const Stepper: React.FC<IStepperProps> = ({ steps }) => {
  const counts = [1, 2, 3, 4];
  return (
    <div className="stepper">
      <div className="steps">
        {counts.map((step: number, i) => (
          <>
            <div
              key={i}
              className={clsx("step", {
                ["background-blue"]: steps >= step,
              })}
            >
              <p>{step}</p>
            </div>
            {step !== counts.length && (
              <div
                className={clsx("line", {
                  ["half-gray-blue"]: steps === step,
                  ["full-blue"]: steps > step,
                })}
              ></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
