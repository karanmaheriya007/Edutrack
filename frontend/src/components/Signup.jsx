import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from './../config/axios';
import AlertMessage from "./AlertMessage";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ severity: '', message: '' });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    axiosInstance.post('/api/users/register', { fullname: name, email, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('name', res.data.user.fullname);
        setAlert({ severity: 'success', message: res.data.message });
        setTimeout(() => navigate('/'), 3000);
      })
      .catch((err) => {
        const errorMessage = err?.response?.data?.message;
        // Clear alert first
        setAlert({ severity: '', message: '' });
        // Delay to trigger rerender
        setTimeout(() => {
          setAlert({ severity: 'error', message: errorMessage });
        }, 50);
      });

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", { email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="container bg-white mx-auto flex-col lg:flex-row signin items-center flex justify-center lg:gap-28 relative w-full lg:px-48">
        <Link to="#" className="absolute top-5 left-5 text-sm font-medium flex items-center hover:underline text-[#A3AED0]"><MdKeyboardArrowLeft size={20} className="inline" /> Home</Link>
        <div className="w-full lg:w-1/2 lg:px-0 max-[320px]:px-5 px-10 min-[360px]:h-screen lg:h-auto flex items-center max-[320px]:py-16">
          <form onSubmit={handleSubmit} className="signin-box w-full">
            <h1 className="font-bold text-4xl pb-3 mb-4" id="signin-header">Sign Up</h1>
            <label htmlFor="name" className="block font-medium text-sm pb-3">Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name && e.target.value.trim().length >= 2) {
                  setErrors((prev) => ({ ...prev, name: undefined }));
                }
              }}
              className={`mb-4 block border ${errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-indigo-600 focus:outline-none w-full py-3 px-6 rounded-2xl placeholder:text-sm placeholder:text-[#A3AED0] placeholder:font-normal text-sm`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mb-4">{errors.name}</p>}
            {/* Email Input */}
            <label htmlFor="email" className="block font-medium text-sm pb-3">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (emailRegex.test(e.target.value)) {
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }
              }}
              className={`mb-2 block border ${errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-indigo-600 focus:outline-none w-full py-3 px-6 rounded-2xl placeholder:text-sm placeholder:text-[#A3AED0] placeholder:font-normal text-sm`}
              placeholder="mail@simmmple.com"
            />

            {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

            {/* Password Input */}
            <label htmlFor="password" className="block font-medium text-sm pb-3 mt-5">Password*</label>
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    if (e.target.value.length >= 8) {
                      setErrors((prev) => ({ ...prev, password: undefined }));
                    }
                  }
                }}
                className={`mb-5 block border ${errors.password ? 'border-red-500' : 'border-gray-300'
                  } focus:border-indigo-600 focus:outline-none w-full py-3 px-6 rounded-2xl pr-10 placeholder:text-sm placeholder:text-[#A3AED0] placeholder:font-normal text-sm`}
                placeholder="Min. 8 characters"
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword ? (
                  <FiEyeOff size={20} color="#A3AED0" />
                ) : (
                  <LuEye size={20} color="#A3AED0" />
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#66449B] hover:bg-purple-800 text-white font-plus-jakarta text-xs rounded-2xl py-6 px-4 font-medium tracking-wider mb-7"
            >
              Sign Up
            </button>
            <p className="text-sm font-normal text-[#2B3674]">
              Already have an account?{" "}
              <Link to="/signin" className="font-bold text-[#4E26FF]">Signin now</Link>
            </p>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 signin-back min-[360px]:h-screen flex flex-col items-center justify-center gap-10 p-3 lg:rounded-bl-[120px] px-36 max-[320px]:py-32">
          <div className="white-round min-w-[220px] min-h-[220px] bg-white rounded-full flex justify-center items-center">
            <img
              src="src/assets/images/Seal_of_Uttarakhand.png"
              alt="background"
              className="w-[120px] h-[120px]"
            />
          </div>
          <h1 className="font-plus-jakarta text-white text-4xl font-bold whitespace-nowrap">Edu Track</h1>
          <img src="src/assets/images/panda.png" className="min-w-[300px]" alt="panda" />
        </div>

        {/* Footer */}
        <div className="flex-col lg:flex-row signin-footer absolute flex items-center justify-between bottom-7 w-full lg:px-48">
          <p className="w-full lg:w-1/2 text-sm font-medium text-[#A3AED0] text-center lg:text-left pb-3">
            © 2024 Edu Track. All Rights Reserved.
          </p>
          <div className="w-full lg:w-1/2 signin-footer-a flex gap-10 text-right justify-center lg:justify-end lg:pr-28">
            <Link to="#" className="text-sm font-medium text-white">License</Link>
            <Link to="#" className="text-sm font-medium text-white">Terms of Use</Link>
          </div>
        </div>
      </div >
      {/* Alert Message */}
      <AlertMessage severity={alert.severity} message={alert.message} />
    </>
  );
};

export default Signup;
