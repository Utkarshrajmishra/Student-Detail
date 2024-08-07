const CourseDetailForm = () => {
  return (
    <section className="font-Poppins text-marine_blue flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-extrabold">Courses Details</h3>
        <p className="text-cool_gray text-sm">
          Please provide details about the course you have enrolled.
        </p>
      </div>
      <div className="flex flex-col mt-3 gap-1">
        <label htmlFor="course" className="text-sm font-semibold">
          Course
        </label>
        <input
          className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
          type="text"
          name="course"
          id="course"
          placeholder="Input your course name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="instructor" className="text-sm font-semibold">
          Instructor
        </label>
        <input
          className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
          type="text"
          name="instructor"
          id="instructor"
          placeholder="Input your instructor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="courseEnrollDate" className="text-sm font-semibold">
          Enroll Date
        </label>
        <input
          className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
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
          className="p-2 rounded-md text-sm outline outline-1 outline-marine_blue"
          type="date"
          name="courseEndDate"
          id="courseEndDate"
        />
      </div>
    </section>
  );
};

export default CourseDetailForm;
