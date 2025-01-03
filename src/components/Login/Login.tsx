import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import eye from "../../assets/svg/eye.svg";
import ButtonPrimary from "../Buttons/ButtonPrimary";

export default function Login() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const savedData = JSON.parse(
      localStorage.getItem("registrationData") || "{}"
    );

    if (email === savedData.email && password === savedData.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/", { replace: true });
    } else {
      setErrorMessage("Incorrect email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-fit md:w-[540px] rounded-lg bg-white p-8 shadow-lg">
        <p className="text-2xl font-semibold">Login to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg sm:p-4 p-2 border-[#98A2B3] border outline-[#D1E9FF] text-sm mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-lg  sm:p-4 p-2 border-[#98A2B3] border outline-[#D1E9FF] text-sm mt-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={eye}
                alt="toggle visibility"
                className="absolute top-1/2 right-3 transform -translate-y-1/4 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <ButtonPrimary text="Login now" />
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <p className="text-base font-normal text-[#98A2B3]">
              Don't have an account?
            </p>
            <Link to="/registration" className="text-blue-600">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
