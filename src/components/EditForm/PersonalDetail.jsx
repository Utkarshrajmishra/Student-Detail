const PersonalDetailForm = () => {
  return (
    <>
      <section className="font-Poppins text-marine_blue flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-extrabold">Personal Details</h3>
          <p className="text-cool_gray text-sm ">
            Please provide your name, age, email, and phone number.
          </p>
        </div>
        <div className="flex flex-col mt-3 gap-1">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
            type="text"
            name="name"
            id="name"
            placeholder="Input your name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
            type="email"
            name="email"
            id="email"
            placeholder="Input your email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber" className=" font-semibold text-sm">
            Phone Number
          </label>
          <input
            className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Input your phone number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="age" className="text-sm font-semibold">
            Age
          </label>
          <input
            className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
            type="number"
            name="age"
            id="age"
            placeholder="Input your age"
            min="0"
            step="1"
          />
        </div>
      </section>
    </>
  );
};

export default PersonalDetailForm;
