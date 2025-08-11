import React, { useState } from "react";

const PersonalDetailsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: { day: "", month: "", year: "" },
    gender: "",
    addressLine1: "",
    countryRegion: "",
    city: "",
    postcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: {
        ...prev.dateOfBirth,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Navigate to next step (e.g., bank payment)
    onSubmit(formData); // Pass data to parent
  };

  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <h2 className="text-center mb-5">Step 1 of 3: Personal Details</h2>
        <div className="col-md-6">
          <label className="form-label">First Name</label> <br />
          <input
            className="form-control form-control-lg"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            className="form-control form-control-lg"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Mobile Number</label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date of Birth</label>
          <div>
            <select
              className="mx-1 form-select-lg"
              name="day"
              value={formData.dateOfBirth.day}
              onChange={handleDateChange}
            >
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="mx-1 form-select-lg"
              name="month"
              value={formData.dateOfBirth.month}
              onChange={handleDateChange}
            >
              <option value="">Month</option>
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m, i) => (
                <option key={m} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
            <select
              className="mx-1 form-select-lg"
              name="year"
              value={formData.dateOfBirth.year}
              onChange={handleDateChange}
            >
              <option value="">Year</option>
              {Array.from({ length: 100 }, (_, i) => 2025 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Gender</label>
          <select
            className="form-select form-select-lg"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Address Line 1</label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Country/Region</label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="countryRegion"
            value={formData.countryRegion}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Postcode</label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12 d-flex justify-content-end mt-5">
          <button className="btn btn-warning fs-4 px-5" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
