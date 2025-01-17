import { useEffect, useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";

import StepperIndicator from "./StepperIndicator";

function getStepContent(step: number) {
    switch (step) {
      case 1:
        return <div className="w-[400px]">trew1</div>;
      case 2:
        return <div>trew2</div>;
      case 3:
        return <div>trew3</div>;
      case 4:
        return <div>trew4</div>;
     
      default:
        return "Unknown step";
    }
  }


export const Panel = () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <div>
            <h1>Run Memories</h1>
            <hr></hr>
            <div>
              <StepperIndicator activeStep={activeStep}/>
              {getStepContent(activeStep)}
            </div>
            

        </div>

    )
}