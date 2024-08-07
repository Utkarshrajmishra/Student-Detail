import { useState } from "react"


//Custom hook to handle form
export const useMultistepForm=(steps)=>{

    //state to keep track of the current step in the form
    const [currentStepIndex, setCurrentStepIndex]=useState(0);



    //function to move forward
     const next=()=>{

        setCurrentStepIndex(i=> {
            //ensure the we stay in the length
            if(i>=steps.length-1) return i;
            return i+1;
        })
     }

     //function to go to backward
     const back=()=>{
        
        setCurrentStepIndex(i=>{
            //ensure that we stay in the length
            if(i<=0) return i;
            return i-1;
        })
     }

     /*function to goto certain page based on
     @param: index of the required page
     */
     const goto=(i)=> setCurrentStepIndex(i)
     

    return{
        currentStepIndex,
        step:steps[currentStepIndex],
        next,
        back,
        goto,

    }
}