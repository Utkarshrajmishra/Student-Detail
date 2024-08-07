import { useState } from "react"


//Custom hook to handle form
const useMultistepForm = (steps) => {
  // State to keep track of the current step in the form
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Function to move forward
  const next = () => {
    setCurrentStepIndex((i) => {
      // Ensure we stay within the length
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  // Function to move backward
  const back = () => {
    setCurrentStepIndex((i) => {
      // Ensure we stay within the length
      if (i <= 0) return i;
      return i - 1;
    });
  };

  // Function to go to a certain page based on
  // @param: index of the required page
  const goto = (i) => setCurrentStepIndex(i);

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    goto,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  }
}

export default useMultistepForm