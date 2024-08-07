const EducationalDetailForm = () => {
  return (
    <section className="font-Ubuntu text-marine_blue flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-extrabold">Educational Details</h3>
        <p className="text-cool_gray">
          Please provide your educational details
        </p>
      </div>
      <div className="flex flex-col mt-6 gap-1">
        <label htmlFor="institution" className=" font-semibold">
          Institution
        </label>
        <input
          className="p-2 rounded-md text-sm outline outline-1 outline-cool_gray"
          type="text"
          name="institution"
          id="institution"
          placeholder="Input your institution"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="degree" className=" font-semibold">
          Degree
        </label>
        <input
          className="p-2 rounded-md  outline outline-1 outline-cool_gray"
          type="text"
          name="degree"
          id="degree"
          placeholder="Input your degree"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="enrollDate" className=" font-semibold">
          Enroll Date
        </label>
        <input
          className="p-2 rounded-md outline outline-1 outline-cool_gray"
          type="date"
          name="enrollDate"
          id="enrollDate"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="endDate" className=" font-semibold">
          End Date
        </label>
        <input
          className="p-2 rounded-md  outline outline-1 outline-cool_gray"
          type="date"
          name="endDate"
          id="endDate"
        />
      </div>
    </section>
  );
};

export default EducationalDetailForm;
