// Signup.jsx
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

  // Submit the signup form
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      // Call the backend API for signup
      const res = await axios.post("https://syednotes-backend.vercel.app/api/user/signup", userInfo);

      if (res.data) {
        toast.success("Signup Successfully");
        navigate(from, { replace: true });
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        reset(); // Clear form fields on success
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error("Network error:", err);
        toast.error("Network error: Could not connect to server");
      }
    }
  };

  // Open login modal
  const openLogin = () => {
    setSignupOpen(false);  
    document.getElementById("my_modal_3").showModal(); 
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
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("fullname", { required: true })}
                  />
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })}
                  />
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
