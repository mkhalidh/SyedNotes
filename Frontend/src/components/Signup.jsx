import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSignupOpen, setSignupOpen] = useState(true);

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    // https://your-backend-url.com/user/signup
    await axios
      .post("syed-notes-backend.vercel.app/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  const openLogin = () => {
    setSignupOpen(false);  // Close the Signup modal
    document.getElementById("my_modal_3").showModal(); // Open the Login modal
  };

  return (
    <>
      {isSignupOpen && (
        <div className="flex h-screen items-center justify-center dark:text-black">
          <div className="w-[600px]">
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                <Link
                  to="/"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setSignupOpen(false)}
                >
                  ✕
                </Link>

                <h3 className="font-bold text-lg">Signup</h3>
                <div className="mt-4 space-y-2">
                  <span className="dark:text-black">Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex justify-around mt-4">
                  <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Signup
                  </button>
                  <p className="text-xl">
                    Have account?{" "}
                    <button
                      className="underline text-blue-500 cursor-pointer hover:bg-transparent hover:text-red-500"
                      onClick={openLogin}
                    >
                      Login
                    </button>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <Login />
    </>
  );
}

export default Signup;
