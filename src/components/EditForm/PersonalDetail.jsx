const PersonalDetailForm = () => {
  return (
    <>
      <section className="font-Ubuntu text-marine_blue flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-extrabold">Personal Details</h3>
          <p className="text-cool_gray  ">
            Please provide your name, age, email, and phone number.
          </p>
        </div>
        <div className="flex flex-col mt-6 gap-1">
          <label htmlFor="name" className=" font-semibold">
            Name
          </label>
          <input
            className="p-2 rounded-md  outline outline-1 outline-cool_gray"
            type="text"
            name="name"
            id="name"
            placeholder="Input your name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className=" font-semibold">
            Email
          </label>
          <input
            className="p-2 rounded-md  outline outline-1 outline-cool_gray"
            type="email"
            name="email"
            id="email"
            placeholder="Input your email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber" className=" font-semibold ">
            Phone Number
          </label>
          <input
            className="p-2 rounded-md  outline outline-1 outline-cool_gray"
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Input your phone number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="age" className=" font-semibold">
            Age
          </label>
          <input
            className="p-2 rounded-md  outline outline-1 outline-cool_gray"
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
