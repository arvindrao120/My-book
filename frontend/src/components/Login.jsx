import React, { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((curr) => {
      curr[e.target.name] = e.target.value;
      return { ...curr };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ email: "", password: "" });
    console.log("login");
    console.log(data);
  };


  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="space-y-7 ">
                <h1 className="text-center text-2xl text-pink-500">
                  {" "}
                  Sign In{" "}
                </h1>
                {/* Email  */}
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>

                    <input
                      type="email"
                      className="grow"
                      placeholder="Email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      required="true"
                    />
                  </label>
                </div>
                {/* Password */}
                <div>
                  <label className="input my-7 input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      placeholder="Enter Password"
                      name="password"
                      required="true"
                      value={data.password}
                     onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className=" flex md:flex-row  flex-col space-y-6 md:space-y-0   items-center justify-around">
                <button className="btn btn-secondary">Login </button>

                <h3>
                  {" "}
                  Don't have an account{" "}
                  <Link to={"/signup"} className="text-pink-500">
                    {" "}
                    Sign Up
                  </Link>{" "}
                </h3>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
