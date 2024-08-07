import Sidebackground from '../assets/images/bg-sidebar-desktop.svg';
import PersonalDetailForm from '../components/EditForm/PersonalDetail';
import EducationalDetailFrom from '../components/EditForm/EducationDetail';
import CourseDetailForm from '../components/EditForm/EditForm/CourseDetail';
import useMultistepForm from '../hooks/useMutlistepForm';

const EditDetail = () => {
  const { currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultistepForm([
      <PersonalDetailForm />,
      <EducationalDetailFrom />,
      <CourseDetailForm />,
    ]);

  return (
    <>
      <section className="w-full h-screen bg-magnolia flex items-center justify-center px-2.5 md:px-0">
        <div className="w-full md:w-[70%] h-[550px] bg-white p-4 rounded-2xl flex md:shadow-lg">
          <div className="flex-shrink-0 w-full md:w-[34%] h-[300px] md:h-full hidden md:block">
            <img
              src={Sidebackground}
              alt="Sidebar Background"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <div className="w-full md:w-[600px]  md:px-10 flex flex-col gap-5">
              <div className="py-5 h-[400px] overflow-y-auto w-full px-1 md:px-4 rounded-md  border-gray-300">
                {step}
              </div>
              <div className="flex flex-col md:flex-row w-full justify-between items-center gap-5">
                {!isFirstStep && (
                  <button
                    onClick={back}
                    className="text-cool_gray w-full md:w-auto"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={next}
                  className={`py-3 font-Ubuntu px-7 rounded-md text-white w-full md:w-auto ${
                    isLastStep ? 'bg-purplish_blue' : 'bg-marine_blue'
                  }`}
                >
                  {isLastStep ? 'Confirm' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditDetail;
