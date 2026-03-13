import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };
  return (
    <div className="max-w-md mx-auto border-2 p-4">
      <form onSubmit={submitForm} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            className="my-1 p-2 input input-bordered w-24 md:w-auto"
          ></input>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            className="my-1 p-2 input input-bordered w-24 md:w-auto"
          ></input>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            className="my-1 p-2 input input-bordered w-24 md:w-auto"
          ></input>
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-white"
          >
            Gender
          </label>
          <select
            onChange={handleChange}
            id="gender"
            name="gender"
            defaultValue="Pick a gender"
            className="my-1 select"
          >
            <option disabled={true}>Pick a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
