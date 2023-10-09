import React, { useState } from "react";

function PhoneValidation() {
  const { PhoneNumber, setPhoneNumber } = useState("");
  const { valid, setValid } = useState(true);

  const handleChange = (event) => {
    const input = event.target.value;
    setPhoneNumber(input);
    setValid(validatePhoneNumber(input));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d(10)$/;
    return phoneNumberPattern.test(phoneNumber);
  };
  return (
    <>
      <div className="form-group col-md-12">
        <label className="mb-1">Phone number</label>
        <input
          type="text"
          className="form-control mb-4"
          value={PhoneNumber}
          onChange={handleChange}
        />
        {!valid && <p>Please enter a valid 10-digit phone number</p>}
      </div>
    </>
  );
}
export default PhoneValidation;
