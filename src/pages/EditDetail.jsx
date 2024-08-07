import Sidebackground from '../assets/images/bg-sidebar-desktop.svg';
import PersonalDetailForm from '../components/EditForm/PersonalDetail';
import { useMultistepForm } from '../hooks/useMutlistepForm';

const EditDetail = () => {
  const { currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultistepForm([<PersonalDetailForm/>, <div>2</div>, <div>3</div>, <div>4</div>]);

  return (
    <>
      <section className="w-full h-[100vh] bg-smoky_black flex items-center justify-center">
        <div className="w-[800px] h-fit bg-eerie_black_2 p-4 rounded-2xl">
          <div>
            {step}
            {!isFirstStep && <button onClick={back}>Back</button>}
             <button onClick={next}>{isLastStep?'Cofirm':'Next'}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditDetail;
