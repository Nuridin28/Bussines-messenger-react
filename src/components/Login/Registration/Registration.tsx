import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import eye from "../../../assets/svg/eye.svg";
import ButtonPrimary from "../../Buttons/ButtonPrimary";
import ButtonSocial from "../../Buttons/ButtonSocial";
import google from "../../../assets/svg/google.svg";

export default function Registration() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("registrationData", JSON.stringify(formData));
    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-fit md:w-[540px] rounded-lg bg-white p-8 shadow-lg">
        <p className="text-2xl font-semibold">Create an account</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg sm:p-4 p-2 border-[#98A2B3] border outline-[#D1E9FF] text-sm mt-3"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-lg sm:p-4 p-2 border-[#98A2B3] border outline-[#D1E9FF] text-sm mt-3"
                value={formData.password}
                onChange={handleChange}
              />
              <img
                src={eye}
                alt="toggle visibility"
                className="absolute top-1/2 right-3 transform -translate-y-1/4 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <ButtonPrimary text="Create account" />
          <ButtonSocial text="Continue with Google" logo={google} />
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <p className="text-base font-normal text-[#98A2B3]">
              Already have an account?
            </p>
            <Link to="/login" className="text-blue-600">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
