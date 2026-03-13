import React from "react";

export default function Form() {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={submitForm} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
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
            type="password"
            id="password"
            name="password"
            className="my-1 p-2 input input-bordered w-24 md:w-auto"
          ></input>
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
