const CourseDetailFrom = () => {
  return (
    <section>
      <div>
        <h2>Courses Details</h2>
        <p>Please provide details about the course you have enrolled.</p>
      </div>
      <div>
        <div>
          <label htmlFor="course">Course</label>
          <input
            type="text"
            name="course"
            id="course"
            placeholder="Input yours course name"
          />
        </div>
        <div>
          <label htmlFor="instructor">Instructor</label>
          <input
            type="text"
            name="instructor"
            id="instructor"
            placeholder="Input yours instructor"
          />
        </div>

        <div>
          <label htmlFor="courseEnrollDate">Enroll Date</label>
          <input type="date" name="enrollDate" id="enrollDate" />
        </div>
        <div>
          <label htmlFor="courseEndDate">End Date</label>
          <input type="date" name="endDate" id="endDate" />
        </div>
      </div>
    </section>
  );
};

export default CourseDetailFrom;
