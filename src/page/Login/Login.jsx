import React, { useRef } from "react";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import { Link } from "react-router-dom";

export default function Login() {
  const LoginEmailRef = useRef();
  const LoginPasswordRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-10 mt-28 w-full">
        <CommonSection title="login" />
        <div className="flex  w-[40%] mx-auto bg-red-200 rounded-lg shadow-lg m-5">
          <div className="flex w-full">
            <form
              className="w-full flex flex-col gap-2 p-3"
              onSubmit={submitHandler}
            >
              <div className="bg-transparent border-b-2 border-gray-600 p-1 w-[90%] mx-auto">
                <input
                  className="outline-none outline-0 border-none bg-transparent p-3 w-full placeholder:text-black"
                  type="text"
                  placeholder="Email"
                  required
                  ref={LoginEmailRef}
                />
              </div>
              <div className="bg-transparent border-b-2 border-gray-600 p-1 w-[90%] mx-auto">
                <input
                  className="outline-none outline-0 border-none bg-transparent p-3 w-full placeholder:text-black"
                  type="text"
                  placeholder="Password"
                  required
                  ref={LoginPasswordRef}
                />
              </div>
              <button className="bg-red-600 px2 py-1 text-white rounded-lg duration-200 shadow-xl hover:shadow-gray-600  w-[20%] mx-auto m-2 ">
                login
              </button>
            </form>
          </div>
        </div>
        <h1 className="text-gray-700 text-center m-7">
          Dont Already have account?
          <Link
            className="duration-200 hover:text-blue-500 hover:underline"
            to="/register"
          >
            create an account
          </Link>
        </h1>
      </div>
    </div>
  );
}
