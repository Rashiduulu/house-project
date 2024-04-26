import React, { useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../store";
import { AppDispatch } from "../store/index";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await dispatch(signUp(form));
      if (response.payload === "Created successfuly") {
        navigate("/sign-in");
      }
    } catch (error: any) {
      if (error.error && error.error.message) {
        setMessage(error.error.message);
      } else {
        setMessage(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[60px]">
      <div className="lg:w-[30%] m-auto">
        <h1 className="text-[24px] font-semibold text-center">Sign In</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[30px] mt-[30px]"
        >
          <input
            required={true}
            className="bg-white outline-none py-2 px-3 rounded-md"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            id="username"
            value={form.username}
          />
          <input
            required={true}
            className="bg-white outline-none py-2 px-3 rounded-md"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            id="email"
            value={form.email}
          />
          <input
            required={true}
            className="bg-white outline-none py-2 px-3 rounded-md"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            id="password"
            value={form.password}
          />
          <span className="text-[10px] text-red-600">{message}</span>
          <CustomButton
            type="submit"
            loading={loading}
            className={`py-[8px] px-[20px] text-white ${
              loading ? "cursor-not-allowed" : ""
            }`}
            text="Sign in"
          />
        </form>
        <div className="flex gap-2 text-[14px] mt-[10px] font-semibold">
          <span>Do not have an account? </span>
          <Link to="/sign-up">
            <span className="text-blue-500 hover:underline">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
