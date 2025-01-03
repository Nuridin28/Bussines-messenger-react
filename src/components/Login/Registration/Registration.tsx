import { useEffect, useState } from "react";
import eye from "../../../assets/svg/eye.svg";
import ButtonPrimary from "../../Buttons/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import ButtonSocial from "../../Buttons/ButtonSocial";
import google from "../../../assets/svg/google.svg";

export default function Registration() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/", { replace: true });
    }

    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };

    return () => {
      window.onpopstate = null;
    };
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("registrationData", JSON.stringify(formData));
    alert("Данные сохранены в localStorage!");
    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#000000] bg-opacity-5">
      <div className="w-[540px] rounded-[20px] bg-white px-[72px] py-[48px] shadow-lg">
        <p className="font-semibold text-3xl">Create an account</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-8">
            <label
              htmlFor="email"
              className="text-base font-normal text-[#344054]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg p-4 border-[#98A2B3] border outline-[#D1E9FF] text-sm mt-3"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="password"
              className="text-base font-normal text-[#344054]"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-lg p-4 border-[#98A2B3] border outline-[#D1E9FF] text-sm mt-3 pr-10"
                value={formData.password}
                onChange={handleChange}
              />
              <img
                src={eye}
                alt="eye"
                className="absolute top-1/2 right-3 transform -translate-y-1/4 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <div className="mt-6">
            <ButtonPrimary text="Create account" />
          </div>
          <ButtonSocial text="Continue with Google" logo={google} />

          <div className="mt-6 flex items-center justify-center gap-2">
            <p className="text-base font-normal text-[#98A2B3]">
              Already have an account?
            </p>
            <p className="text-base font-normal text-[#1570FF] cursor-pointer">
              <Link to={"/"}>Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
