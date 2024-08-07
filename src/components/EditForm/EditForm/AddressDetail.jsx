const AddressDetailForm = () => {
  return (
    <>
      <section>
        <div>
          <h1>Address Details</h1>
          <p>Please provide your current and current and permanent address.</p>
        </div>
        <div>
          <label htmlFor="currentAddress">Current Address</label>
          <input
            type="text"
            name="currentAddress"
            id="currentAddress"
            placeholder="Input your current address"
          />
        </div>
        <div>
          <label htmlFor="permanentAddress">Current Address</label>
          <input
            type="text"
            name="permanentAddress"
            id="permanentAddress"
            placeholder="Input your permanent address"
          />
        </div>
      </section>
    </>
  );
};

export default AddressDetailForm;
