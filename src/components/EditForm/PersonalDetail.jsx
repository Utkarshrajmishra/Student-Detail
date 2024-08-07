const PersonalDetailForm =() =>{
    return (
      <>
        <section>
          <div>
            <h3>Personal Details</h3>
            <p>Please provide your name, age, email, and phone number.</p>
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Input your name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Input your email"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Name</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Input your phone number"
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Input your age"
            />
          </div>
        </section>
      </>
    );
}

export default PersonalDetailForm