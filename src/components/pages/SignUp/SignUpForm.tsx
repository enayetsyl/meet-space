import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../../redux/api/authApi";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role:"user"
  });
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [signup, { isLoading, isSuccess, isError }] = useSignupMutation();

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
      const result = await signup(formData).unwrap(); // API call
      console.log("Signup successful: ", result);
      navigate("/login");
      toast.success("Signup successful. Please login.");
      
    } catch (error) {
      console.error("Signup failed: ", error);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#4d71da] to-[#6E6EE2] px-5 w-full py-5">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Signup</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

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

        {/* Phone Field */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        {/* Address Field */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
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
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <p className="text-center text-white pt-5">Already have and account. <Link to="/login"><span className="underline text-customOrange">Login</span></Link>
      </p>
      {/* Success and Error Feedback */}
      {isSuccess && <p className="text-customOrange mt-4">Signup successful!</p>}
      {isError && <p className="text-red-500 mt-4">Signup failed. Please try again.</p>}
    </div>
  );
};

export default SignUpForm;
