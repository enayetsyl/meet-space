import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../redux/api/authApi";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  
  });
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Clear email error if valid
    setEmailError("");

    // Perform signup request
    try {
      const result = await login(formData).unwrap(); // API call
      sessionStorage.setItem("token", result.token);
      navigate("/");
      toast.success("Login successful.");
      
    } catch (error) {
      console.error("Login failed: ", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#4d71da] to-[#6E6EE2] px-5 w-full py-5">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Login</h1>
      <form onSubmit={handleSubmit}>
       
        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        {emailError && <p className="text-red-500">{emailError}</p>}

        {/* Password Field */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="hover:bg-white text-white p-2 w-full rounded border border-white hover:text-black"
          disabled={isLoading}
        >
          {isLoading ? "Logging..." : "Login"}
        </button>
      </form>
      <p className="text-center text-white pt-5">Do not have an account. <Link to="/sign-up"><span className="underline text-customOrange">Sign Up</span></Link>
      </p>
      {/* Success and Error Feedback */}
      {isSuccess && <p className="text-customOrange mt-4">Login successful!</p>}
      {isError && <p className="text-red-500 mt-4">Login failed. Please try again.</p>}
    </div>
  );
};

export default LoginForm;
