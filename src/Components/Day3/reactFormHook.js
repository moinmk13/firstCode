import React from "react";
import { useForm } from "react-hook-form";

function ReactFormHook() {
  const form = useForm();
  const { register, handleSubmit, watch, formState } = form;
  const { errors } = formState;
  function onSubmit(data) {
    console.warn("form submited", data);
  }
  console.warn(watch());
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                for="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className="mb-4">
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                {...register("email", {
                  required: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid Email Address",
                  },
                })}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                {...register("pass", {
                  required: {
                    value: true,
                    message: "Pass is Required",
                  },
                })}
              />
              <p>{errors.pass?.message}</p>
            </div>
            <div className="mb-6">
              <label
                for="password_confirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                className="mt-1 p-2 w-full border rounded-md"
                {...register("cpass", {
                  required: {
                    value: true,
                    message: "confirm Password",
                  },
                })}
              />
              <p>{errors.cpass?.message}</p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReactFormHook;
