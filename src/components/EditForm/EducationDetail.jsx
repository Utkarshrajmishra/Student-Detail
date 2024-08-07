const EducationalDetailForm = () => {
  return (
    <section className="font-Poppins text-marine_blue flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-extrabold">Educational Details</h3>
        <p className="text-cool_gray text-sm">
          Please provide your educational details
        </p>
      </div>
      <div className="flex flex-col mt-3 gap-1">
        <label htmlFor="institution" className="text-sm font-semibold">
          Institution
        </label>
        <input
          className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
          type="text"
          name="institution"
          id="institution"
          placeholder="Input your institution"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="degree" className="text-sm font-semibold">
          Degree
        </label>
        <input
          className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
          type="text"
          name="degree"
          id="degree"
          placeholder="Input your degree"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="enrollDate" className="text-sm font-semibold">
          Enroll Date
        </label>
        <input
          className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
          type="date"
          name="enrollDate"
          id="enrollDate"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="endDate" className="text-sm font-semibold">
          End Date
        </label>
        <input
          className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
          type="date"
          name="endDate"
          id="endDate"
        />
      </div>
    </section>
  );
};

export default EducationalDetailForm;
