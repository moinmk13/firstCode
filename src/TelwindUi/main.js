import React from "react";
import Input from "./input";

function Form() {
  return (
    <>
      <div className="box-border h-100 w-100 p-6 m-6 bg-white border rounded-md">
        <h1>CREATE QUIZ</h1>
        <h3>
          <input type="checkbox" className="rounded text-pink-500" /> Practise
          Quiz
        </h3>
        <div className="grid gap-4 mb-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 ">
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
          <div className="flex gap-5">
          <div>
            <Input />
          </div>
          
            <button className="mt-7 text-blue-400">this is button</button>
    
          </div>
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
        </div>
        <div className="flex gap-12">
          <button className="bordre rounded-md bg-gradient-to-r from-green-500 to-cyan-950 text-white py-2 px-4 w-64">
            Create Quiz
          </button>
          <button className="bordre rounded-md bg-gradient-to-r from-green-500 to-cyan-950 text-white py-2 px-4 w-64">
            Selection Questions
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
