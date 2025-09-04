import React from "react";
import { universityCourses, dehradunUniversities } from "../../college";
import Button from "../Button";
const Form = () => {
  return (
    <div className=" border-4 border-blue-600 rounded-2xl px-4 py-5 w-1/2 max-md:w-full bg-white max-lg:w-full">
      <h2 className="font-semibold ml-6 text-xl">Quick Apply</h2>
      <p className="text-xs ml-6 mb-6">Takes under 60 seconds</p>
      <form action="">
        <label className="block font-semibold text-md " htmlFor="" id="name">
          Name
        </label>
        <input
        required
          className="border-[1px] w-full rounded-xl p-2 outline-blue-600 outline-offset-4 mb-4"
          type="text"
          placeholder="Your full name"
        />

        <div className="flex flex-col gap-4">
          <div className="flex w-full gap-3">
            <div className="w-1/2">
              <div>Phone</div>
              <input
              required
                className="w-full p-2 rounded-xl border-[1px] outline-blue-500 outline-offset-4"
                type="text"
              />
            </div>
            <div className="w-1/2">
              <div>Email</div>
              <input
              required
                className="w-full p-2 rounded-xl border-[1px] outline-blue-500 outline-offset-4"
                type="email"
              />
            </div>
          </div>

          <div className="flex w-full gap-3">
            <div className="w-1/2">
              <div>City</div>
              <input
              required
                className="w-full p-2 rounded-xl border-[1px] outline-blue-500 outline-offset-4"
                type="text"
              />
            </div>
            <div className="w-1/2">
              <div>12th % / CGPA</div>
              <input
              required
                className="w-full p-2 rounded-xl border-[1px] outline-blue-500 outline-offset-4"
                type="text"
              />
            </div>
          </div>

          <div className="flex w-full gap-3">
            <div className="w-1/2">
              <div>Degree Level</div>
              <select
              required
                name=""
                id=""
                className="w-full p-2 rounded-xl border-[1px]"
              >
                <option value="UG">UG</option>
                <option value="PG">PG</option>
              </select>
            </div>
            <div className="w-1/2">
              <div>Target Year</div>
              <select
              required
                name=""
                id=""
                className="w-full p-2 rounded-xl border-[1px]"
              >
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
          </div>

          <div className="flex w-full gap-3 ">
            <div className="w-1/2">
              <div>Course</div>
              <select
              required
                name=""
                id=""
                className="w-full p-2 rounded-xl border-[1px]"
              >
                {universityCourses.map((val, idx) => (
                  <option key={idx} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <div>Preferred University</div>
              <select
              required
                name=""
                id=""
                className="w-full p-2 rounded-xl border-[1px]"
              >
                {dehradunUniversities.map((val, idx) => (
                  <option key={idx} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>


          <label className="block font-semibold text-md " htmlFor="" id="name">
          Name
        </label>
        <textarea
        required
          className="border-[1px] w-full rounded-xl p-2 outline-blue-600 outline-offset-4 mb-4"
          type="text"
          placeholder="Your full name"
        />

        </div>
        <button onSubmit={(e)=>e.preventDefault()} className='bg-blue-500 rounded-xl py-2 px-4 font-semibold text-white'>Submit Application</button>
      </form>
    </div>
  );
};

export default Form;
