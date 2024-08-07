const CourseDetailForm = () => {
  return (
    <section className="font-Ubuntu text-marine_blue flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-extrabold">Courses Details</h3>
        <p className="text-cool_gray ">
          Please provide details about the course you have enrolled.
        </p>
      </div>
      <div className="flex flex-col mt-6 gap-1">
        <label htmlFor="course" className=" font-semibold">
          Course
        </label>
        <input
          className="p-2 rounded-md outline outline-1 outline-cool_gray"
          type="text"
          name="course"
          id="course"
          placeholder="Input your course name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="instructor" className=" font-semibold">
          Instructor
        </label>
        <input
          className="p-2 rounded-md  outline outline-1 outline-cool_gray"
          type="text"
          name="instructor"
          id="instructor"
          placeholder="Input your instructor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="courseEnrollDate" className=" font-semibold">
          Enroll Date
        </label>
        <input
          className="p-2 rounded-md outline outline-1 outline-cool_gray"
          type="date"
          name="courseEnrollDate"
          id="courseEnrollDate"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="courseEndDate" className="text-sm font-semibold">
          End Date
        </label>
        <input
          className="p-2 rounded-md  outline outline-1 outline-cool_gray"
          type="date"
          name="courseEndDate"
          id="courseEndDate"
        />
      </div>
    </section>
  );
};

export default CourseDetailForm;
