import React from "react";
import Input from "./input";
import { useForm } from "react-hook-form";
import Dropdown from "./dropDown";

function Form() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("Form Data", data);
  };

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return (
    <>
      <div
        className="box-border h-100 w-100 p-6 m-6 bg-white border rounded-md"
        style={{ height: "80vh" }}
      >
        <h1>CREATE QUIZ</h1>
        <h3>
          <input type="checkbox" className="rounded text-pink-500" /> Practise
          Quiz
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-4 mb-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 ">
            <div>
              <Dropdown
                label={"Category"}
                register={register}
                name="Select Category"
                errorMessage="Elease Enter Your Category"
                errors={errors}
              />
            </div>
            <div>
              <Dropdown
                label={"Topic"}
                register={register}
                name="Select Topic"
                errorMessage="Please Select Your Quiz-mode"
                errors={errors}
              />
            </div>
            <div>
              <Dropdown
                label={"Quiz-mode"}
                register={register}
                name="Quiz Mode"
                errorMessage="Please Select Your Quiz-mode"
                errors={errors}
              />
            </div>
            <div>
              <Input
                label={"Entry Fees"}
                placeholder={"Entry Fees"}
                register={register}
                name="entryFees"
                errorMessage="Please Enter Your Entry Fees"
                errors={errors}
              />
            </div>
            <div>
              <Input
                label={"Total Spots"}
                placeholder={"Total Spots"}
                register={register}
                name="totalSpots"
                errorMessage="Please Enter Your Total Spots"
                errors={errors}
              />
            </div>
            <div className="flex gap-5">
              <div>
                <Input
                  label={"Total Winnings Amount"}
                  placeholder={"Total Winnings Amount"}
                  register={register}
                  name="totalWin"
                  errorMessage="Please Enter Total Winnings Amount"
                  errors={errors}
                />
              </div>

              <button className="mt-7 text-blue-400">Winner Breakup</button>
            </div>
            <div>
              <Input
                label={"Total number of questions"}
                placeholder={"Total number of questions"}
                register={register}
                name="totalNo"
                errorMessage="Please Enter Total number of questions"
                errors={errors}
              />
            </div>
            <div>
              <Input
                label={"Quiz Duration"}
                placeholder={"Quiz Duration"}
                register={register}
                name="quizDuration"
                errorMessage="Please Enter Your Quiz Duration"
                errors={errors}
              />
            </div>
            <div>
              <Input
                label={"Start Time"}
                val={dateTime}
                register={register}
                name="startTime"
                errors={errors}
              />
            </div>
          </div>
          <div className="flex gap-12">
            <button
              type="submit"
              className="bordre rounded-md bg-gradient-to-r from-green-500 to-cyan-950 text-white py-2 px-4 w-64"
            >
              Create Quiz
            </button>
            <button
              type="submit"
              className="bordre rounded-md bg-gradient-to-r from-green-500 to-cyan-950 text-white py-2 px-4 w-64"
            >
              Selection Questions
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
