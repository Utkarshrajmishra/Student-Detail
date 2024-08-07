const EducationalDetailFrom = () => {
  return (
    <section>
      <div>
        <h2>Educational Details</h2>
        <p>Please provide your educational details</p>
      </div>
      <div>
        <div>
          <label htmlFor="institution">Intitution</label>
          <input
            type="text"
            name="institution"
            id="institution"
            placeholder="Input yours institution"
          />
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Input yours degree"
          />
        </div>

        <div>
          <label htmlFor="enrollDate">Enroll Date</label>
          <input type="date" name="enrollDate" id="enrollDate" />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" id="endDate" />
        </div>
      </div>
    </section>
  );
};

export default EducationalDetailFrom;
